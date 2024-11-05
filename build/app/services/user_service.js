var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { default as User } from '#models/user';
import { inject } from '@adonisjs/core';
import { HttpContext } from '@adonisjs/core/http';
let UserService = class UserService {
    ctx;
    constructor(ctx) {
        this.ctx = ctx;
    }
    async register(data) {
        const user = await User.create(data);
        return user;
    }
    async login(data) {
        const user = await User.verifyCredentials(data.email, data.password);
        return user;
    }
    async findById(id) {
        const user = await User.findOrFail(id);
        return user;
    }
    async findOneBy(column, value) {
        const user = await User.findBy(column, value);
        return user;
    }
    async update(data) {
        const user = this.ctx.auth.user;
        if (!user)
            return;
        user.merge(data);
        await user.save();
        return user;
    }
    async delete() {
        const user = this.ctx.auth.user;
    }
    static async loadRelation(ctx, relation) {
        const user = ctx.auth.user;
        if (!user)
            return;
        await user.load(relation);
    }
};
UserService = __decorate([
    inject(),
    __metadata("design:paramtypes", [HttpContext])
], UserService);
export default UserService;
//# sourceMappingURL=user_service.js.map