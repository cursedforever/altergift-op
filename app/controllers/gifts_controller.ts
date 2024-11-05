// import type { HttpContext } from '@adonisjs/core/http'

import GiftService from '#services/gift_service'
import { createGiftValidator } from '#validators/gift'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class GiftsController {
  constructor(private giftService: GiftService) {}

  /**
   * Display a list of all gift.
   */
  async list({ request, inertia }: HttpContext) {
    const poolId = request.param('pool_id')
    const gifts = await this.giftService.findAllByPool(poolId)
    return inertia.render('gifts/list', {
      gifts,
    })
  }

  /**
   * Handle the form to create a new gift.
   */
  async handleCreate({ response, request }: HttpContext) {
    const data = await request.validateUsing(createGiftValidator)
    let gift = await this.giftService.findOneByEmail(data.email)

    if (gift) {
      this.giftService.update(gift.id, data)
    } else {
      gift = await this.giftService.create(data)
    }

    await gift.load('pool')
    return response.redirect(`pools/${gift.pool.slug}`)
  }

  /**
   * Handle the form to update a gift.
   */
  async handleUpdate({ request, inertia }: HttpContext) {
    const data = await request.validateUsing(createGiftValidator)
    const id = request.param('gift_id')
    const gift = await this.giftService.update(id, data)

    return inertia.render('pools/show', { pool: gift.pool })
  }

  /**
   * Handle the delete of a gift.
   */
  async handleDelete({ response, request }: HttpContext) {
    const id = request.param('gift_id')
    const success = await this.giftService.delete(id)
    return response.send(success)
  }
}
