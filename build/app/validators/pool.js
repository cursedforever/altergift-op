import vine, { SimpleMessagesProvider } from '@vinejs/vine';
export const createPoolValidator = vine.compile(vine.object({
    name: vine.string().trim(),
    imageUrl: vine.string().trim(),
}));
export const updatePoolValidator = vine.compile(vine.object({
    params: vine.object({
        pool_id: vine.string().uuid().exists({ table: 'pools', column: 'id' }).modelId(),
    }),
    name: vine.string().trim().optional(),
    imageUrl: vine.string().trim().optional(),
}));
createPoolValidator.messagesProvider = new SimpleMessagesProvider({
    'name.required': 'Le nom de la cagnotte est obligatoire',
});
//# sourceMappingURL=pool.js.map