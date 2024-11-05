import vine, { BaseLiteralType, VineString } from '@vinejs/vine';
const isModelId = vine.createRule((value, _, field) => {
    if (typeof value !== 'string') {
        return;
    }
    const modelId = value;
    field.mutate(modelId, field);
});
VineString.macro('modelId', function () {
    return new VineModelId();
});
export class VineModelId extends BaseLiteralType {
    constructor(options, validations) {
        super(options, validations || [isModelId()]);
    }
    clone() {
        return new VineModelId(this.cloneOptions(), this.cloneValidations());
    }
}
//# sourceMappingURL=model_id.js.map