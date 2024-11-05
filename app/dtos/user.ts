import User from '#models/user'
import { ModelId } from '#types/model_id'
import { BaseModelDto } from '@adocasts.com/dto/base'

export default class UserDto extends BaseModelDto {
  declare id: ModelId
  declare fullName: string | null
  declare firstName: string
  declare lastName: string
  declare email: string
  declare password: string
  declare createdAt: string
  declare updatedAt: string | null

  constructor(user?: User) {
    super()

    if (!user) return
    this.id = user.id
    this.fullName = user.fullName
    this.firstName = user.firstName
    this.lastName = user.lastName
    this.email = user.email
    this.password = user.password
    this.createdAt = user.createdAt.toISO()!
    this.updatedAt = user.updatedAt?.toISO()!
  }
}
