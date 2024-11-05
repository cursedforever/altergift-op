import UserService from '#services/user_service'
import { loginValidator, registerValidator } from '#validators/auth'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AuthController {
  constructor(private userService: UserService) {}

  async renderLogin({ inertia, auth, response }: HttpContext) {
    // await redirectToHomeIfConnected()
    if (auth.user) return response.redirect().back()
    return inertia.render('auth/login')
  }

  async handleLogin({ request, auth, response }: HttpContext) {
    const data = await request.validateUsing(loginValidator)
    const user = await this.userService.login(data)
    await auth.use(auth.defaultGuard).login(user)
    return response.redirect().toRoute('home')
  }

  async renderRegister({ request, inertia }: HttpContext) {
    const payload = request.qs()
    // await redirectToHomeIfConnected()
    return inertia.render('auth/register', payload)
  }

  async handleRegister({ request, response }: HttpContext) {
    const data = await request.validateUsing(registerValidator)

    const user = await this.userService.register(data)

    // mail.sendLater(new VerifyENotification(user))
    return response.redirect().toRoute('home')
    // return response.redirect().toRoute('front.verify-email', { user_id: user.id })
  }

  async handleLogout({ auth, response }: HttpContext) {
    await auth.use(auth.defaultGuard).logout()
    return response.redirect().toRoute('home')
  }
}
