import { createInertiaApp, Link } from '@inertiajs/vue3'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, DefineComponent, h } from 'vue'
import AppHead from '~/components/AppHead.vue'
import AppLayout from '~/components/layouts/AppLayout.vue'

export default function render(page: any) {
  return createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = import.meta.glob<DefineComponent>('../pages/**/*.vue', { eager: true })
      const resolvedPage = pages[`../pages/${name}.vue`]

      resolvedPage.default.layout = resolvedPage.default.layout || AppLayout

      return resolvedPage
    },

    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) })
        .use(plugin)
        .component('Link', Link)
        .component('AppHead', AppHead)
    },
  })
}
