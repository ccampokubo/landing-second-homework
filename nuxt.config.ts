// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },

  imports: {
    dirs: [
      'composables',
      'composables/*/index.{ts,js,mjs,mts}',
      'composables/**',
    ],
  },

  app: {
    head: {
      titleTemplate: '%s - Stack Front',
      title: 'Stack Front para los BO',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Stack Front para los Backoffice',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // config envs
  runtimeConfig: {
    public: {
      secret: process.env.SECRET_KEY,
      API_BASE_URL: process.env.API_URL,
      SHORT_NAME: process.env.SHORT_NAME,
    },
  },

  // css
  css: ['@/assets/scss/main.scss'],

  // modules
  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'nuxt-primevue',
    '@nuxtjs/eslint-module',
  ],

  // primevue
  primevue: {
    usePrimeVue: true,
    options: {
      ripple: true,
    },
    components: {
      include: [
        'Button',
        'InputText',
        'Toast',
        'DataTable',
        'Column',
        'Paginator',
        'Menu',
        'Dialog',
      ],
    },
  },

  // translator
  i18n: {
    locales: [
      {
        code: 'es',
        file: 'es.ts',
        name: 'Español',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'es',
  },
})
