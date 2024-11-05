import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'users';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid('id').primary();
            table.string('first_name').nullable();
            table.string('last_name').nullable();
            table.string('email', 254).notNullable().unique();
            table.string('password').notNullable();
            table.string('phone_number').unique();
            table.timestamp('created_at').notNullable();
            table.timestamp('updated_at').nullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1730204720084_create_users_table.js.map