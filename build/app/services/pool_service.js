import Pool from '#models/pool';
export default class PoolService {
    async create(data) {
        const pool = await Pool.create(data);
        await pool.load('gifts');
        return pool;
    }
    async findOneBySlug(slug) {
        const pool = await Pool.query().where('slug', slug).preload('gifts').firstOrFail();
        return pool;
    }
    async findOneById(id) {
        const pool = await Pool.query().where('id', id).preload('gifts').firstOrFail();
        return pool;
    }
    async update(id, data) {
        const pool = await Pool.findOrFail(id);
        pool.merge(data);
        await pool.save();
        await pool.load('gifts');
        return pool;
    }
    async delete(id) {
        const pool = await Pool.findOrFail(id);
        await pool.delete();
    }
}
//# sourceMappingURL=pool_service.js.map