import GiftDto from '#dtos/gift';
import { BaseModelDto } from '@adocasts.com/dto/base';
export default class PoolDto extends BaseModelDto {
    constructor(pool) {
        super();
        if (!pool)
            return;
        this.id = pool.id;
        this.name = pool.name;
        this.slug = pool.slug;
        this.imageUrl = pool.imageUrl;
        this.isPublic = pool.isPublic;
        this.description = pool.description;
        this.createdAt = pool.createdAt.toISO();
        this.updatedAt = pool.updatedAt.toISO();
        this.gifts = GiftDto.fromArray(pool.gifts);
        this.numberOfParticipants = pool.numberOfParticipants;
        this.$extras = pool.$extras;
    }
}
//# sourceMappingURL=pool.js.map