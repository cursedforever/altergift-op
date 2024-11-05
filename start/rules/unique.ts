// unique adonis js rule

import db from '@adonisjs/lucid/services/db'
import vine, { VineString } from '@vinejs/vine'
import { FieldContext } from '@vinejs/vine/types'

/**
 * Options accepted by the unique rule
 */
export interface Options {
  table: string
  column: string
  where?: { column: string; value: any }[]
}

/**
 * Implementation
 */
async function isUnique(value: unknown, options: Options, field: FieldContext) {
  /**
   * We do not want to deal with non-string
   * values. The "string" rule will handle the
   * the validation.
   */
  if (typeof value !== 'string') {
    return
  }

  const query = db.from(options.table).select(options.column).where(options.column, value)
  options.where?.forEach((where) => {
    query.andWhere(where.column, where.value)
  })
  const result = await query.first()

  if (result) {
    field.report('Le champ {{ field }} doit être unique', 'isUnique', field)
  }
}

export const uniqueRule = vine.createRule(isUnique)

declare module '@vinejs/vine' {
  interface VineString {
    isUnique(options: Options): VineString
  }
}

VineString.macro('isUnique', function (this: VineString, options: Options) {
  return this.use(uniqueRule(options))
})
