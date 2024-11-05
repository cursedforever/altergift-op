var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import Pool from '#models/pool';
import { generateUUID } from '#utils/tools';
import { BaseModel, beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm';
import { DateTime } from 'luxon';
export default class Gift extends BaseModel {
    static async createUUID(model) {
        model.id = generateUUID();
    }
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", String)
], Gift.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Gift.prototype, "username", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Gift.prototype, "email", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Gift.prototype, "message", void 0);
__decorate([
    column({
        serialize: (value) => {
            console.log(value / 100);
            return value / 100;
        },
    }),
    __metadata("design:type", Number)
], Gift.prototype, "amount", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Gift.prototype, "poolId", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], Gift.prototype, "isAnonymous", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], Gift.prototype, "isAmountHidden", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], Gift.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], Gift.prototype, "updatedAt", void 0);
__decorate([
    belongsTo(() => Pool),
    __metadata("design:type", Object)
], Gift.prototype, "pool", void 0);
__decorate([
    beforeCreate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Gift]),
    __metadata("design:returntype", Promise)
], Gift, "createUUID", null);
//# sourceMappingURL=gift.js.map