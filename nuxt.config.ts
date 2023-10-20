// https://nuxt.com/docs/api/configuration/nuxt-config
import sass from 'sass'
export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },

  nitro: {
    compressPublicAssets: true,
  },

  typescript: {
    strict: true,
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

  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**',
    ],
  },

  // modules
  modules: ['@nuxtjs/i18n', '@pinia/nuxt', 'nuxt-primevue'],

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
      ],
    },
  },

  // buildModules
  buildModules: [
    '@nuxtjs/moment',
    [
      'nuxt-purgecss',
      {
        /* Otras opciones */
        enabled: true,
        content: [
          'components/**/*.vue',
          'layouts/**/*.vue',
          'pages/**/*.vue',
          'plugins/**/*.js',
          'nuxt.config.ts',
        ],
        whitelist: [
          'p-',
          'pf-',
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!cursor-move).+-move$/,
          /data-v-.*/,
        ],
        whitelistPatterns: [/prime-/, /p-/, /pf-/],
      },
    ],
  ],

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

  // css
  css: ['~/assets/scss/main.scss'],

  // config envs
  runtimeConfig: {
    public: {
      secret: process.env.SECRET_KEY,
      API_BASE_URL: process.env.API_URL,
      SHORT_NAME: process.env.SHORT_NAME,
    },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  build: {
    transpile: ['primevue', '@nuxtjs/i18n'],
  },

  setup(build: any) {
    build.css.preprocessorOptions = {
      sass: {
        implementation: sass,
      },
    }
  },
})
