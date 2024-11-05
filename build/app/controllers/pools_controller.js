var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import PoolDto from '#dtos/pool';
import { default as Pool } from '#models/pool';
import PoolService from '#services/pool_service';
import { createPoolValidator, updatePoolValidator } from '#validators/pool';
import { inject } from '@adonisjs/core';
let PoolsController = class PoolsController {
    poolService;
    constructor(poolService) {
        this.poolService = poolService;
    }
    async list({ inertia }) {
        const pools = await Pool.query();
        return inertia.render('pools/list', { pools });
    }
    async show({ inertia, request }) {
        const slug = request.param('pool_slug');
        const pool = await this.poolService.findOneBySlug(slug);
        return inertia.render('pools/show', { pool: new PoolDto(pool) });
    }
    async renderParticipate({ inertia, request }) {
        const slug = request.param('pool_slug');
        const pool = await this.poolService.findOneBySlug(slug);
        return inertia.render('pools/pool-participate', { pool: new PoolDto(pool) });
    }
    async handleCreate({ inertia, request }) {
        const data = await request.validateUsing(createPoolValidator);
        const pool = await this.poolService.create(data);
        return inertia.render('pools/show', { pool });
    }
    async handleUpdate({ inertia, request }) {
        const data = await request.validateUsing(updatePoolValidator);
        const id = request.param('pool_id');
        const pool = await this.poolService.update(id, data);
        return inertia.render('pools/show', { pool });
    }
    async handleDelete({ inertia, request }) {
        const id = request.param('pool_id');
        const success = await this.poolService.delete(id);
        const pools = await Pool.query();
        return inertia.render('pools/list', { pools, success });
    }
};
PoolsController = __decorate([
    inject(),
    __metadata("design:paramtypes", [PoolService])
], PoolsController);
export default PoolsController;
//# sourceMappingURL=pools_controller.js.map