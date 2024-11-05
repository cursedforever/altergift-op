import Pool from '#models/pool'
import { ModelId } from '#types/model_id'

export default class PoolService {
  async create(data: Partial<Pool>) {
    const pool = await Pool.create(data)
    await pool.load('gifts')
    return pool
  }

  async findOneBySlug(slug: string) {
    const pool = await Pool.query().where('slug', slug).preload('gifts').firstOrFail()
    return pool
  }

  async findOneById(id: ModelId) {
    const pool = await Pool.query().where('id', id).preload('gifts').firstOrFail()
    return pool
  }

  async update(id: ModelId, data: Partial<Pool>) {
    const pool = await Pool.findOrFail(id)
    pool.merge(data)
    await pool.save()
    await pool.load('gifts')
    return pool
  }

  async delete(id: ModelId) {
    const pool = await Pool.findOrFail(id)
    await pool.delete()
  }
}
