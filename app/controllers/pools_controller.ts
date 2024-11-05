// import type { HttpContext } from '@adonisjs/core/http'

import PoolDto from '#dtos/pool'
import { default as Pool } from '#models/pool'
import PoolService from '#services/pool_service'
import { createPoolValidator, updatePoolValidator } from '#validators/pool'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class PoolsController {
  constructor(private poolService: PoolService) {}

  /**
   * Display a list of all pools.
   */
  async list({ inertia }: HttpContext) {
    const pools = await Pool.query()
    return inertia.render('pools/list', { pools })
  }

  /**
   * Display one pool.
   */
  async show({ inertia, request }: HttpContext) {
    const slug = request.param('pool_slug')
    const pool = await this.poolService.findOneBySlug(slug)
    return inertia.render('pools/show', { pool: new PoolDto(pool) })
  }

  async renderParticipate({ inertia, request }: HttpContext) {
    const slug = request.param('pool_slug')
    const pool = await this.poolService.findOneBySlug(slug)
    return inertia.render('pools/pool-participate', { pool: new PoolDto(pool) })
  }

  /**
   * Handle the form to create a new pool.
   */
  async handleCreate({ inertia, request }: HttpContext) {
    const data = await request.validateUsing(createPoolValidator)
    const pool = await this.poolService.create(data)
    return inertia.render('pools/show', { pool })
  }

  /**
   * Handle the form to update a pool.
   */
  async handleUpdate({ inertia, request }: HttpContext) {
    const data = await request.validateUsing(updatePoolValidator)
    const id = request.param('pool_id')
    const pool = await this.poolService.update(id, data)
    return inertia.render('pools/show', { pool })
  }

  /**
   * Handle the delete of a pool.
   */
  async handleDelete({ inertia, request }: HttpContext) {
    const id = request.param('pool_id')
    const success = await this.poolService.delete(id)
    const pools = await Pool.query()
    return inertia.render('pools/list', { pools, success })
  }
}
