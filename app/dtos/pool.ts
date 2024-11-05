import GiftDto from '#dtos/gift'
import Pool from '#models/pool'
import { ModelId } from '#types/model_id'
import { BaseModelDto } from '@adocasts.com/dto/base'

export default class PoolDto extends BaseModelDto {
  declare id: ModelId
  declare name: string
  declare slug: string
  declare isPublic: boolean
  declare description: string
  declare imageUrl: string | null
  declare createdAt: string
  declare updatedAt: string
  declare gifts: GiftDto[]
  declare numberOfParticipants: number
  declare $extras: Record<any, any>

  constructor(pool?: Pool) {
    super()

    if (!pool) return
    this.id = pool.id
    this.name = pool.name
    this.slug = pool.slug
    this.imageUrl = pool.imageUrl
    this.isPublic = pool.isPublic
    this.description = pool.description
    this.createdAt = pool.createdAt.toISO()!
    this.updatedAt = pool.updatedAt.toISO()!
    this.gifts = GiftDto.fromArray(pool.gifts)
    this.numberOfParticipants = pool.numberOfParticipants
    this.$extras = pool.$extras
  }
}
