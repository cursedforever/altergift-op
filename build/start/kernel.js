import router from '@adonisjs/core/services/router';
import server from '@adonisjs/core/services/server';
server.errorHandler(() => import('#exceptions/handler'));
server.use([
    () => import('#middleware/container_bindings_middleware'),
    () => import('@adonisjs/static/static_middleware'),
    () => import('@adonisjs/cors/cors_middleware'),
    () => import('@adonisjs/vite/vite_middleware'),
    () => import('@adonisjs/inertia/inertia_middleware'),
]);
router.use([
    () => import('@adonisjs/core/bodyparser_middleware'),
    () => import('@adonisjs/session/session_middleware'),
    () => import('@adonisjs/shield/shield_middleware'),
    () => import('@adonisjs/auth/initialize_auth_middleware'),
    () => import('#middleware/detect_user_locale_middleware'),
]);
export const middleware = router.named({
    guest: () => import('#middleware/guest_middleware'),
    auth: () => import('#middleware/auth_middleware'),
    silentAuth: () => import('#middleware/silent_auth_middleware'),
});
//# sourceMappingURL=kernel.js.map