import db from '@adonisjs/lucid/services/db';
import vine, { VineString } from '@vinejs/vine';
async function exists(value, options, field) {
    if (typeof value !== 'string') {
        return;
    }
    const result = await db
        .from(options.table)
        .select(options.column)
        .where(options.column, value)
        .first();
    if (!result) {
        field.report('The {{ field }} field does not exist', 'exists', field);
    }
}
export const existsRule = vine.createRule(exists);
VineString.macro('exists', function (options) {
    return this.use(existsRule(options));
});
//# sourceMappingURL=exists.js.map