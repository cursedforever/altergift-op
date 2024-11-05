import { RequestValidator } from '@adonisjs/core/http';
import { I18n } from '@adonisjs/i18n';
import i18nManager from '@adonisjs/i18n/services/main';
export default class DetectUserLocaleMiddleware {
    static {
        RequestValidator.messagesProvider = (ctx) => {
            return ctx.i18n.createMessagesProvider();
        };
    }
    getRequestLocale(ctx) {
        const userLanguages = ctx.request.languages();
        return i18nManager.getSupportedLocaleFor(userLanguages);
    }
    async handle(ctx, next) {
        const language = this.getRequestLocale(ctx);
        ctx.i18n = i18nManager.locale(language || i18nManager.defaultLocale);
        ctx.containerResolver.bindValue(I18n, ctx.i18n);
        if ('view' in ctx) {
            ctx.view.share({ i18n: ctx.i18n });
        }
        return next();
    }
}
//# sourceMappingURL=detect_user_locale_middleware.js.map