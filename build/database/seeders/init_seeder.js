import { PoolFactory } from '#database/factories/pool_factory';
import { BaseSeeder } from '@adonisjs/lucid/seeders';
export default class extends BaseSeeder {
    async run() {
        await PoolFactory.merge({
            name: 'Test Birthday',
            description: 'This is a test pool. Please do not participate. :)',
        })
            .with('gifts', 30, (gifts) => { })
            .create();
        await PoolFactory.merge({
            name: 'Tiffany Birthday',
            description: "Une cagnotte pour l'anniversaire de Tiffany.",
        }).create();
    }
}
//# sourceMappingURL=init_seeder.js.map