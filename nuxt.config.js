import colors from 'vuetify/es5/util/colors'
import redirectSSL from 'redirect-ssl'

export default {

  // Dev tools
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },

  // server host
  server: {
    host: 0 // default: localhost
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Force redirect to https when in production
  serverMiddleware: [
    redirectSSL.create({
      enabled: process.env.NODE_ENV === 'production'
    }),
  ],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - jerome-riffier',
    title: 'jerome-riffier',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/colorMode',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Fix code automatically whenever a file is saved
  eslint: {
    fix: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap' // Toujour laisser ce module en dernier
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'fr',
      name: 'Jérôme Riffier, développeur',
      short_name: 'Jérôme Riffier',
      description: 'CV, Projet Personnel et plus encore...',
      display: 'standalone',
      background_color: '#daeeff'
    },
    workbox: {
      enabled: false, // or use a global variable to track the current NODE_ENV, etc to determine dev mode
      cacheAssets: false,
      offline: true,
      offlineStrategy: 'CacheFirst'
    },
    icon: {
      /* icon options */
      fileName: 'icon_pwa.png'
    },
    meta: {
      theme_color: '#daeeff'
    }
  },

  // i18n localisation config
  i18n: {
    locales: [
      {
        code: 'fr',
        file: 'fr-FR.js'
      },
      {
        code: 'en',
        file: 'en-EN.js'
      }
    ],
    defaultLocale: 'fr',
    vueI18n: {
      fallbackLocale: 'fr'
    },
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'lang/'
  },

  // Nuxt Content module configuration
  content: {
    // Options
  },

  // Nuxt sitemap module configuration
  sitemap: {
    hostname: 'https://jerome-riffier.fr'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    customProperties: true,
    theme: {
      dark: false,
      themes: {
        light: {
          // primary: '#A7C1EF',
          accent: colors.amber.darken2,
          // secondary:  colors.teal,
          // info: '#A7C1EF',
          // warning: '#FB8239',
          // error: '#fb3939',
          // success: '#A7EFA9',
          // anchor: '#FB8239'
          background: '#A7C1EF',
          cv: '#FB8239'
        },
         dark: {
           accent:  '#A7EFA9',
           background: '#6984B3',
           cv: '#ff9e63'
        }
      },
      options: {
        customProperties: true,
      },
    },
    breakpoint: {
      mobileBreakpoint: 'sm' // This is equivalent to a value of 960
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    uglify: {
      uglifyOptions: {
        compress: true
      },
      cache: '/path/to/cache/dir'
    },
    optimization: {
      minimize: true,
    }
  }
}
