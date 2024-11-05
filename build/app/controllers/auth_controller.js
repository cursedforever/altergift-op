var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import UserService from '#services/user_service';
import { loginValidator, registerValidator } from '#validators/auth';
import { inject } from '@adonisjs/core';
let AuthController = class AuthController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async renderLogin({ inertia, auth, response }) {
        if (auth.user)
            return response.redirect().back();
        return inertia.render('auth/login');
    }
    async handleLogin({ request, auth, response }) {
        const data = await request.validateUsing(loginValidator);
        const user = await this.userService.login(data);
        await auth.use(auth.defaultGuard).login(user);
        return response.redirect().toRoute('home');
    }
    async renderRegister({ request, inertia }) {
        const payload = request.qs();
        return inertia.render('auth/register', payload);
    }
    async handleRegister({ request, response }) {
        const data = await request.validateUsing(registerValidator);
        const user = await this.userService.register(data);
        return response.redirect().toRoute('home');
    }
    async handleLogout({ auth, response }) {
        await auth.use(auth.defaultGuard).logout();
        return response.redirect().toRoute('home');
    }
};
AuthController = __decorate([
    inject(),
    __metadata("design:paramtypes", [UserService])
], AuthController);
export default AuthController;
//# sourceMappingURL=auth_controller.js.map