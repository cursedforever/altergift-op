import Pool from '#models/pool'
import { type ModelId } from '#types/model_id'
import { generateUUID } from '#utils/tools'
import { BaseModel, beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm'
import { type BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'

export default class Gift extends BaseModel {
  @column({ isPrimary: true })
  declare id: ModelId

  @column()
  declare username: string

  @column()
  declare email: string

  @column()
  declare message: string | null

  @column({
    serialize: (value: number) => {
      console.log(value / 100)
      return value / 100
    },
  })
  declare amount: number // in cents

  @column()
  declare poolId: ModelId

  @column()
  declare isAnonymous: boolean

  @column()
  declare isAmountHidden: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Pool)
  declare pool: BelongsTo<typeof Pool>

  @beforeCreate()
  static async createUUID(model: Gift) {
    model.id = generateUUID()
  }
}
