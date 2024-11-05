var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import Gift from '#models/gift';
import { generateUUID, getTotalGiftAmount } from '#utils/tools';
import string from '@adonisjs/core/helpers/string';
import { afterFind, BaseModel, beforeCreate, column, computed, hasMany } from '@adonisjs/lucid/orm';
import { DateTime } from 'luxon';
export default class Pool extends BaseModel {
    get numberOfParticipants() {
        return this.gifts.length;
    }
    static async createUUID(model) {
        model.id = generateUUID();
    }
    static async slugify(model) {
        if (model.slug)
            return;
        const slug = string.slug(model.name, {
            replacement: '-',
            lower: true,
            strict: true,
        });
        const rows = await Pool.query()
            .select('slug')
            .whereRaw('lower(??) = ?', ['slug', slug])
            .orWhereRaw('lower(??) like ?', ['slug', `${slug}-%`]);
        if (!rows.length) {
            model.slug = slug;
            return;
        }
        const incrementors = rows.reduce((result, row) => {
            const tokens = row.slug.toLowerCase().split(`${slug}-`);
            if (tokens.length < 2) {
                return result;
            }
            const increment = Number(tokens.at(1));
            if (!Number.isNaN(increment)) {
                result.push(increment);
            }
            return result;
        }, []);
        const increment = incrementors.length ? Math.max(...incrementors) + 1 : 1;
        model.slug = `${slug}-${increment}`;
    }
    static async getTotalGiftAmount(model) {
        await model.load('gifts');
        model.$extras.totalGiftAmount = getTotalGiftAmount(model.gifts);
    }
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", String)
], Pool.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Pool.prototype, "slug", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Pool.prototype, "name", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Pool.prototype, "imageUrl", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Pool.prototype, "description", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], Pool.prototype, "isPublic", void 0);
__decorate([
    computed(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Pool.prototype, "numberOfParticipants", null);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], Pool.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], Pool.prototype, "updatedAt", void 0);
__decorate([
    hasMany(() => Gift),
    __metadata("design:type", Object)
], Pool.prototype, "gifts", void 0);
__decorate([
    beforeCreate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Pool]),
    __metadata("design:returntype", Promise)
], Pool, "createUUID", null);
__decorate([
    beforeCreate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Pool]),
    __metadata("design:returntype", Promise)
], Pool, "slugify", null);
__decorate([
    afterFind(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Pool]),
    __metadata("design:returntype", Promise)
], Pool, "getTotalGiftAmount", null);
//# sourceMappingURL=pool.js.map