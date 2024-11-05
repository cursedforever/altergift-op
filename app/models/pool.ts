import Gift from '#models/gift'
import { type ModelId } from '#types/model_id'
import { generateUUID, getTotalGiftAmount } from '#utils/tools'
import string from '@adonisjs/core/helpers/string'
import { afterFind, BaseModel, beforeCreate, column, computed, hasMany } from '@adonisjs/lucid/orm'
import { type HasMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'

export default class Pool extends BaseModel {
  @column({ isPrimary: true })
  declare id: ModelId

  @column()
  declare slug: string

  @column()
  declare name: string

  @column()
  declare imageUrl: string | null

  @column()
  declare description: string

  @column()
  declare isPublic: boolean

  @computed()
  public get numberOfParticipants() {
    return this.gifts.length
  }

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Gift)
  declare gifts: HasMany<typeof Gift>

  @beforeCreate()
  static async createUUID(model: Pool) {
    model.id = generateUUID()
  }

  @beforeCreate()
  static async slugify(model: Pool) {
    if (model.slug) return

    const slug = string.slug(model.name, {
      replacement: '-',
      lower: true,
      strict: true,
    })

    const rows = await Pool.query()
      .select('slug')
      .whereRaw('lower(??) = ?', ['slug', slug])
      .orWhereRaw('lower(??) like ?', ['slug', `${slug}-%`])

    if (!rows.length) {
      model.slug = slug
      return
    }

    const incrementors = rows.reduce<number[]>((result, row) => {
      const tokens = row.slug.toLowerCase().split(`${slug}-`)

      if (tokens.length < 2) {
        return result
      }

      const increment = Number(tokens.at(1))

      if (!Number.isNaN(increment)) {
        result.push(increment)
      }

      return result
    }, [])

    const increment = incrementors.length ? Math.max(...incrementors) + 1 : 1

    model.slug = `${slug}-${increment}`
  }

  @afterFind()
  static async getTotalGiftAmount(model: Pool) {
    await model.load('gifts')
    model.$extras.totalGiftAmount = getTotalGiftAmount(model.gifts)
  }
}
