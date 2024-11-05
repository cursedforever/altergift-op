import { ModelId } from '#types/model_id'
import vine, { BaseLiteralType, VineString } from '@vinejs/vine'
import { FieldContext, FieldOptions, Validation } from '@vinejs/vine/types'

const isModelId = vine.createRule((value: unknown, _, field: FieldContext) => {
  /**
   * We do not want to deal with non-string
   * values. The "string" rule will handle the
   * the validation.
   */
  if (typeof value !== 'string') {
    return
  }

  // vine.helpers.isUUID(value)

  /**
   * Cast type
   */
  const modelId = value as ModelId

  /**
   * Mutate the field's value
   */
  field.mutate(modelId, field)
})

VineString.macro('modelId', function () {
  return new VineModelId()
})

declare module '@vinejs/vine' {
  interface VineString {
    modelId(): VineModelId
  }
}

export class VineModelId extends BaseLiteralType<string, ModelId, ModelId> {
  constructor(options?: FieldOptions, validations?: Validation<any>[]) {
    super(options, validations || [isModelId()])
  }

  clone() {
    return new VineModelId(this.cloneOptions(), this.cloneValidations()) as this
  }
}
