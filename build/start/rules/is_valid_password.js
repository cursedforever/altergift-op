import vine, { VineString } from '@vinejs/vine';
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;
function password(value, options, field) {
    if (typeof value !== 'string') {
        return;
    }
    if (!passwordRegex.test(value)) {
        if (!/[a-z]/.test(value)) {
            return field.report('Le mot de passe doit contenir au moins une lettre minuscule', 'lowerCaseCharacter', field);
        }
        if (!/[A-Z]/.test(value)) {
            return field.report('Le mot de passe doit contenir au moins une lettre majuscule', 'upperCaseCharacter', field);
        }
        if (!/[0-9]/.test(value)) {
            return field.report('Le mot de passe doit contenir au moins un chiffre', 'number', field);
        }
        if (!/[@$!%*?&]/.test(value)) {
            return field.report('Le mot de passe doit contenir au moins un caractère spécial', 'specialCharacter', field);
        }
        if (value.length < 8) {
            return field.report('Le mot de passe doit contenir au moins 8 caractères', 'minLength', field);
        }
        if (value.length > 32) {
            return field.report('Le mot de passe ne peut pas dépasser 32 caractères', 'maxLength', field);
        }
    }
}
export const passwordRule = vine.createRule(password);
VineString.macro('isValidPassword', function () {
    return this.use(passwordRule());
});
//# sourceMappingURL=is_valid_password.js.map