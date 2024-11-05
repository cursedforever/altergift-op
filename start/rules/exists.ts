import db from '@adonisjs/lucid/services/db'
import vine, { VineString } from '@vinejs/vine'
import { FieldContext } from '@vinejs/vine/types'

/**
 * Options accepted by the unique rule
 */
type Options = {
  table: string
  column: string
}

/**
 * Implementation
 */
async function exists(value: unknown, options: Options, field: FieldContext) {
  /**
   * We do not want to deal with non-string
   * values. The "string" rule will handle the
   * the validation.
   */
  if (typeof value !== 'string') {
    return
  }

  const result = await db
    .from(options.table)
    .select(options.column)
    .where(options.column, value)
    .first()

  if (!result) {
    field.report('The {{ field }} field does not exist', 'exists', field)
  }
}

export const existsRule = vine.createRule(exists)

declare module '@vinejs/vine' {
  interface VineString {
    exists(options: Options): VineString
  }
}

VineString.macro('exists', function (this: VineString, options: Options) {
  return this.use(existsRule(options))
})
