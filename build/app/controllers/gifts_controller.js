var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import GiftService from '#services/gift_service';
import { createGiftValidator } from '#validators/gift';
import { inject } from '@adonisjs/core';
let GiftsController = class GiftsController {
    giftService;
    constructor(giftService) {
        this.giftService = giftService;
    }
    async list({ request, inertia }) {
        const poolId = request.param('pool_id');
        const gifts = await this.giftService.findAllByPool(poolId);
        return inertia.render('gifts/list', {
            gifts,
        });
    }
    async handleCreate({ response, request }) {
        const data = await request.validateUsing(createGiftValidator);
        let gift = await this.giftService.findOneByEmail(data.email);
        if (gift) {
            this.giftService.update(gift.id, data);
        }
        else {
            gift = await this.giftService.create(data);
        }
        await gift.load('pool');
        return response.redirect(`pools/${gift.pool.slug}`);
    }
    async handleUpdate({ request, inertia }) {
        const data = await request.validateUsing(createGiftValidator);
        const id = request.param('gift_id');
        const gift = await this.giftService.update(id, data);
        return inertia.render('pools/show', { pool: gift.pool });
    }
    async handleDelete({ response, request }) {
        const id = request.param('gift_id');
        const success = await this.giftService.delete(id);
        return response.send(success);
    }
};
GiftsController = __decorate([
    inject(),
    __metadata("design:paramtypes", [GiftService])
], GiftsController);
export default GiftsController;
//# sourceMappingURL=gifts_controller.js.map