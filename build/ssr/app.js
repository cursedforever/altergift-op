import { resolvePageComponent } from "@adonisjs/inertia/helpers";
import { createInertiaApp, Link } from "@inertiajs/vue3";
import { createSSRApp, h } from "vue";
import { _ as _sfc_main, a as _sfc_main$1 } from "./AppLayout-B4AJGgCi.js";
import "vue/server-renderer";
import "@iconify/vue";
import "vue-sonner";
import "clsx";
import "tailwind-merge";
import "radix-vue";
const appName = "Alter Gifts";
createInertiaApp({
  progress: { color: "#5468FF" },
  title: (title) => `${appName}`,
  resolve: async (name) => {
    const page = await resolvePageComponent(
      `../pages/${name}.vue`,
      /* @__PURE__ */ Object.assign({ "../pages/auth/login.vue": () => import("./login-BhrVs29a.js").then((n) => n._), "../pages/auth/register.vue": () => import("./register-D0Z0YwqZ.js").then((n) => n._), "../pages/errors/not_found.vue": () => import("./not_found-B51f7VzC.js").then((n) => n._), "../pages/errors/server_error.vue": () => import("./server_error-uLOyDKDB.js").then((n) => n._), "../pages/home.vue": () => import("./home-4TT_T4uR.js").then((n) => n._), "../pages/pools/pool-participate.vue": () => import("./pool-participate-CQNiWFxP.js").then((n) => n._), "../pages/pools/show.vue": () => import("./show-CwnU6Vq9.js").then((n) => n._) })
    );
    page.default.layout = page.default.layout || _sfc_main;
    return page;
  },
  setup({ el, App, props, plugin }) {
    createSSRApp({ render: () => h(App, props) }).use(plugin).component("Link", Link).component("AppHead", _sfc_main$1).mount(el);
  }
});
