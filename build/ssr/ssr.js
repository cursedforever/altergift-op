import { _ as __vite_glob_0_0 } from "./login-BhrVs29a.js";
import { _ as __vite_glob_0_1 } from "./register-D0Z0YwqZ.js";
import { _ as __vite_glob_0_2 } from "./not_found-B51f7VzC.js";
import { _ as __vite_glob_0_3 } from "./server_error-uLOyDKDB.js";
import { _ as __vite_glob_0_4 } from "./home-4TT_T4uR.js";
import { _ as __vite_glob_0_5 } from "./pool-participate-CQNiWFxP.js";
import { _ as __vite_glob_0_6 } from "./show-CwnU6Vq9.js";
import { createInertiaApp, Link } from "@inertiajs/vue3";
import { renderToString } from "@vue/server-renderer";
import { createSSRApp, h } from "vue";
import { _ as _sfc_main, a as _sfc_main$1 } from "./AppLayout-B4AJGgCi.js";
import "./Button-CuuDX7RD.js";
import "vue/server-renderer";
import "radix-vue";
import "class-variance-authority";
import "./CardFooter-Dte-UPsX.js";
import "./Label-CuYHo2A0.js";
import "@vueuse/core";
import "@iconify/vue";
import "./Card-DyI5RSi3.js";
import "lucide-vue-next";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "embla-carousel-vue";
import "embla-carousel-autoplay";
import "luxon";
import "vue-sonner";
import "clsx";
import "tailwind-merge";
function render(page) {
  return createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "../pages/auth/login.vue": __vite_glob_0_0, "../pages/auth/register.vue": __vite_glob_0_1, "../pages/errors/not_found.vue": __vite_glob_0_2, "../pages/errors/server_error.vue": __vite_glob_0_3, "../pages/home.vue": __vite_glob_0_4, "../pages/pools/pool-participate.vue": __vite_glob_0_5, "../pages/pools/show.vue": __vite_glob_0_6 });
      const resolvedPage = pages[`../pages/${name}.vue`];
      resolvedPage.default.layout = resolvedPage.default.layout || _sfc_main;
      return resolvedPage;
    },
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).use(plugin).component("Link", Link).component("AppHead", _sfc_main$1);
    }
  });
}
export {
  render as default
};
