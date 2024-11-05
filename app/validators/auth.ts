import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().trim().email(),
    password: vine.string(),
  })
)

loginValidator.messagesProvider = new SimpleMessagesProvider({
  'email.required': "L'adresse e-mail est requise",
  'email.email': "L'adresse e-mail est invalide",
  'password.required': 'Le mot de passe est requis',
})

/**
 * Validator to validate the payload when creating
 * a new user.
 */
export const registerValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .trim()
      .email()

      .isUnique({ column: 'email', table: 'users' }),
    password: vine.string().isValidPassword().confirmed({
      confirmationField: 'passwordConfirmation',
    }),
    lastName: vine.string().minLength(2).maxLength(50),
    firstName: vine.string().minLength(2).maxLength(50),
    phoneNumber: vine
      .string()
      .mobile({
        locale: ['fr-FR'],
      })
      .isUnique({ column: 'phone_number', table: 'users' })
      .optional(),
  })
)

registerValidator.messagesProvider = new SimpleMessagesProvider({
  'email.required': "L'adresse e-mail est requise",
  'email.email': "L'adresse e-mail est invalide",
  'email.isUnique': "L'adresse e-mail est déjà prise",
  'password.required': 'Le mot de passe est requis',
  'password.confirmed': 'Les mots de passe sont differents',
  'phoneNumber.required': 'Veuillez saisir un numéro de téléphone',
  'phoneNumber.isUnique': 'Ce numéro est déjà utilisé',
  'phoneNumber.mobile': 'Veuillez saisir un numéro valide',
  'lastName.required': 'Veuillez saisir votre nom',
  'lastName.minLength': 'Le nom doit contenir au moins 2 caractères',
  'lastName.maxLength': 'Le nom ne peut pas dépasser 50 caractères',
  'firstName.required': 'Veuillez saisir votre prénom',
  'firstName.minLength': 'Le prénom doit contenir au moins 2 caractères',
  'firstName.maxLength': 'Le prénom ne peut pas dépasser 50 caractères',
})

/**
 * Validator to validate the payload when updating
 * an existing user.
 */
export const updateUserValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .trim()
      .email()

      .isUnique({ column: 'email', table: 'users' })
      .optional(),

    password: vine
      .string()
      .trim()
      .confirmed({
        confirmationField: 'passwordConfirmation',
      })
      .optional(),

    lastName: vine.string().trim().minLength(2).maxLength(50).optional(),

    firstName: vine.string().trim().minLength(2).maxLength(50).optional(),

    phoneNumber: vine
      .string()
      .trim()
      .mobile({
        locale: ['fr-FR'],
      })
      .isUnique({ column: 'phone_number', table: 'users' })
      .optional(),
  })
)

updateUserValidator.messagesProvider = new SimpleMessagesProvider({
  'email.email': "L'adresse e-mail est invalide",
  'email.unique': "L'adresse e-mail est déjà prise",
  'password.confirmed': 'Le mot de passe ne correspond pas',
  'phoneNumber.unique': 'Ce numéro est déjà utilisé',
  'lastName.minLength': 'Le nom doit contenir au moins 2 caractères',
  'lastName.maxLength': 'Le nom ne peut pas dépasser 50 caractères',
  'firstName.minLength': 'Le nom doit contenir au moins 2 caractères',
  'firstName.maxLength': 'Le nom ne peut pas dépasser 50 caractères',
})
