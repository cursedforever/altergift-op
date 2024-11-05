import UserDto from '#dtos/user'
import { defineConfig } from '@adonisjs/inertia'
import type { InferSharedProps } from '@adonisjs/inertia/types'
import { AuthSharedData } from 'types.js'

const inertiaConfig = defineConfig({
  /**
   * Path to the Edge view that will be used as the root view for Inertia responses
   */
  rootView: 'inertia_layout',

  /**
   * Data that should be shared with all rendered pages
   */
  sharedData: {
    errors: (ctx) => {
      const errors = ctx.session?.flashMessages.get('errors') ?? {}
      return Object.keys(errors).reduce(
        (acc, key) => ({ ...acc, [key]: errors[key].join(', ') }),
        {}
      )
    },
    auth: (ctx): AuthSharedData => {
      const user = ctx.auth.use(ctx.auth.defaultGuard).user
      return { user: user ? new UserDto(user) : null }
    },
    exceptions: (ctx) => ctx.session?.flashMessages.get('errorsBag') ?? {},
    messages: (ctx) => ctx.session?.flashMessages.all() ?? {},
  },

  /**
   * Options for the server-side rendering
   */
  ssr: {
    enabled: true,
    entrypoint: 'inertia/app/ssr.ts',
  },
})

export default inertiaConfig

declare module '@adonisjs/inertia/types' {
  export interface SharedProps extends InferSharedProps<typeof inertiaConfig> {}
}
