/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { createInertiaApp, Link } from '@inertiajs/vue3'
import { createSSRApp, DefineComponent, h } from 'vue'
import AppHead from '~/components/AppHead.vue'
import AppLayout from '~/components/layouts/AppLayout.vue'
import '../css/app.css'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${appName}`,

  resolve: async (name) => {
    const page = await resolvePageComponent(
      `../pages/${name}.vue`,
      import.meta.glob<DefineComponent>('../pages/**/*.vue')
    )

    page.default.layout = page.default.layout || AppLayout

    return page
  },

  setup({ el, App, props, plugin }) {
    createSSRApp({ render: () => h(App, props) })
      .use(plugin)
      .component('Link', Link)
      .component('AppHead', AppHead)
      .mount(el)
  },
})
