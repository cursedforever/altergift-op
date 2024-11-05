import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const createGiftValidator = vine.compile(
  vine.object({
    username: vine.string().trim(),
    email: vine.string().email().trim(),
    message: vine.string().trim().maxLength(1024).optional(),
    amount: vine
      .number()
      .min(0.01)
      .transform((value) => Math.floor(value * 100)),
    poolId: vine.string().uuid().exists({ table: 'pools', column: 'id' }).modelId(),
    isAnonymous: vine.boolean().optional(),
    isAmountHidden: vine.boolean().optional(),
  })
)

export const updateGiftValidator = vine.compile(
  vine.object({
    params: vine.object({
      gift_id: vine.string().uuid().exists({ table: 'gifts', column: 'id' }).modelId(),
    }),
    message: vine.string().trim().optional(),
    amount: vine.number().positive(),
  })
)

// Messages
createGiftValidator.messagesProvider = new SimpleMessagesProvider({
  'username.required': 'Ton nom est obligatoire',
  'email.required': 'Ton email est obligatoire',
  'email.email': 'Le format de ton email est invalide',
  'amount.required': 'Le montant est obligatoire',
  'amount.positive': 'Le montant doit être positif',
  'poolId.required': 'La cagnotte est obligatoire',
  'poolId.exists': "La cagnotte n'existe pas",
  'poolId.uuid': 'Le format de la cagnotte est invalide',
  'message.maxLength': 'Le message est trop long',
  'isAnonymous.boolean': 'Le champ "anonyme" doit être un booléen',
  'isAmountHidden.boolean': 'Le champ "masquer le montant" doit être un booléen',
})

updateGiftValidator.messagesProvider = new SimpleMessagesProvider({
  'amount.required': 'Le montant est obligatoire',
  'amount.positive': 'Le montant doit être positif',
  'message.maxLength': 'Le message est trop long',
})
