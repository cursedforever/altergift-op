import PoolDto from '#dtos/pool';
import { BaseModelDto } from '@adocasts.com/dto/base';
export default class GiftDto extends BaseModelDto {
    constructor(gift) {
        super();
        if (!gift)
            return;
        this.id = gift.id;
        this.username = gift.username;
        this.email = gift.email;
        this.message = gift.message;
        this.amount = gift.amount;
        this.poolId = gift.poolId;
        this.isAnonymous = gift.isAnonymous;
        this.isAmountHidden = gift.isAmountHidden;
        this.createdAt = gift.createdAt.toISO();
        this.updatedAt = gift.updatedAt.toISO();
        this.pool = gift.pool && new PoolDto(gift.pool);
    }
}
//# sourceMappingURL=gift.js.map