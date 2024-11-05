import Gift from '#models/gift';
export default class GiftService {
    async create(data) {
        const gift = await Gift.create(data);
        return gift;
    }
    async findOneById(id) {
        const gift = await Gift.findOrFail(id);
        return gift;
    }
    async findOneByEmail(email) {
        const gift = await Gift.findBy('email', email);
        return gift;
    }
    async findAllByPool(poolId) {
        const gifts = await Gift.query().where('pool_id', poolId);
        return gifts;
    }
    async update(id, data) {
        const gift = await Gift.findOrFail(id);
        gift.load('pool', (query) => query.preload('gifts'));
        gift.merge(data);
        await gift.save();
        return gift;
    }
    async delete(id) {
        const gift = await Gift.findOrFail(id);
        await gift.delete();
        return true;
    }
}
//# sourceMappingURL=gift_service.js.map