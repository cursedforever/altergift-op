import PoolDto from '#dtos/pool'
import Gift from '#models/gift'
import { ModelId } from '#types/model_id'
import { BaseModelDto } from '@adocasts.com/dto/base'

export default class GiftDto extends BaseModelDto {
  declare id: ModelId
  declare username: string
  declare email: string
  declare message: string | null
  declare amount: number // in cents
  declare poolId: ModelId
  declare isAnonymous: boolean
  declare isAmountHidden: boolean
  declare createdAt: string
  declare updatedAt: string
  declare pool: PoolDto | null

  constructor(gift?: Gift) {
    super()

    if (!gift) return
    this.id = gift.id
    this.username = gift.username
    this.email = gift.email
    this.message = gift.message
    this.amount = gift.amount
    this.poolId = gift.poolId
    this.isAnonymous = gift.isAnonymous
    this.isAmountHidden = gift.isAmountHidden
    this.createdAt = gift.createdAt.toISO()!
    this.updatedAt = gift.updatedAt.toISO()!
    this.pool = gift.pool && new PoolDto(gift.pool)
  }
}
