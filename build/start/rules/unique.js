import db from '@adonisjs/lucid/services/db';
import vine, { VineString } from '@vinejs/vine';
async function isUnique(value, options, field) {
    if (typeof value !== 'string') {
        return;
    }
    const query = db.from(options.table).select(options.column).where(options.column, value);
    options.where?.forEach((where) => {
        query.andWhere(where.column, where.value);
    });
    const result = await query.first();
    if (result) {
        field.report('Le champ {{ field }} doit être unique', 'isUnique', field);
    }
}
export const uniqueRule = vine.createRule(isUnique);
VineString.macro('isUnique', function (options) {
    return this.use(uniqueRule(options));
});
//# sourceMappingURL=unique.js.map