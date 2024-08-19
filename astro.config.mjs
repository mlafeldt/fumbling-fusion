import cloudflare from '@astrojs/cloudflare'
import clerk from '@clerk/astro'
import { defineConfig, envField } from 'astro/config'

export default defineConfig({
  integrations: [clerk()],
  output: 'hybrid',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    imageService: 'passthrough',
  }),
  vite: {
    build: {
      minify: false, // Meaningful error messages
    },
  },
  experimental: {
    env: {
      schema: {
        PUBLIC_CLERK_PUBLISHABLE_KEY: envField.string({ context: 'client', access: 'public' }),
        CLERK_SECRET_KEY: envField.string({ context: 'server', access: 'secret' }),
      },
    },
  },
})
