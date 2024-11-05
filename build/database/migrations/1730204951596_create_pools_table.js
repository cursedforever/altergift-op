import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'pools';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id').primary();
            table.string('slug').notNullable().unique();
            table.string('name').notNullable();
            table.string('description');
            table.boolean('is_public').defaultTo(false);
            table.string('image_url').nullable();
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1730204951596_create_pools_table.js.map