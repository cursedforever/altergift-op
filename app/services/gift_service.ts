import Gift from '#models/gift'
import { ModelId } from '#types/model_id'

export default class GiftService {
  async create(data: Partial<Gift>) {
    const gift = await Gift.create(data)
    return gift
  }

  async findOneById(id: ModelId) {
    const gift = await Gift.findOrFail(id)
    return gift
  }

  async findOneByEmail(email: string) {
    const gift = await Gift.findBy('email', email)
    return gift
  }

  async findAllByPool(poolId: ModelId) {
    const gifts = await Gift.query().where('pool_id', poolId)
    return gifts
  }

  async update(id: ModelId, data: Partial<Gift>) {
    const gift = await Gift.findOrFail(id)
    gift.load('pool', (query) => query.preload('gifts'))
    gift.merge(data)
    await gift.save()
    return gift
  }

  async delete(id: ModelId) {
    const gift = await Gift.findOrFail(id)
    await gift.delete()
    return true
  }
}
