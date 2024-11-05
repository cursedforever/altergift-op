import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'gifts';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id').primary();
            table.uuid('pool_id').references('id').inTable('pools').onDelete('CASCADE');
            table.string('username').notNullable();
            table.string('email').notNullable().unique();
            table.text('message').nullable();
            table.integer('amount').notNullable().checkPositive();
            table.boolean('is_anonymous').defaultTo(false);
            table.boolean('is_amount_hidden').defaultTo(false);
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1730204958172_create_gifts_table.js.map