import UserDto from '#dtos/user';
import { defineConfig } from '@adonisjs/inertia';
const inertiaConfig = defineConfig({
    rootView: 'inertia_layout',
    sharedData: {
        errors: (ctx) => {
            const errors = ctx.session?.flashMessages.get('errors') ?? {};
            return Object.keys(errors).reduce((acc, key) => ({ ...acc, [key]: errors[key].join(', ') }), {});
        },
        auth: (ctx) => {
            const user = ctx.auth.use(ctx.auth.defaultGuard).user;
            return { user: user ? new UserDto(user) : null };
        },
        exceptions: (ctx) => ctx.session?.flashMessages.get('errorsBag') ?? {},
        messages: (ctx) => ctx.session?.flashMessages.all() ?? {},
    },
    ssr: {
        enabled: true,
        entrypoint: 'inertia/app/ssr.ts',
    },
});
export default inertiaConfig;
//# sourceMappingURL=inertia.js.map