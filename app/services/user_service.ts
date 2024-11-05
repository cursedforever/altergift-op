import { default as User } from '#models/user'
import { ModelId } from '#types/model_id'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class UserService {
  constructor(private ctx: HttpContext) {}

  async register(data: Partial<User>) {
    const user = await User.create(data)
    return user
  }

  async login(data: { email: string; password: string }) {
    const user = await User.verifyCredentials(data.email, data.password)
    return user
  }

  async findById(id: string) {
    const user = await User.findOrFail(id)
    return user
  }

  async findOneBy(column: string, value: ModelId | string) {
    const user = await User.findBy(column, value)
    return user
  }

  async update(data: Partial<User>) {
    const user = this.ctx.auth.user
    if (!user) return
    user.merge(data)
    await user.save()
    return user
  }

  async delete() {
    const user = this.ctx.auth.user
    // TODO: delete user
  }

  public static async loadRelation(ctx: HttpContext, relation: string) {
    const user = ctx.auth.user
    if (!user) return
    await user.load(relation)
  }
}
