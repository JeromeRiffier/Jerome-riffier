import colors from 'vuetify/es5/util/colors'

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

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    devtools: false
  },

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
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/color-mode',
    // https://google-analytics.nuxtjs.org/
    '@nuxtjs/google-analytics'
  ],

  // Fix code automatically whenever a file is saved
  eslint: {
    fix: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxtjs/recaptcha',
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

  // Nuxt googleAnalytics module configuration
  googleAnalytics: {
    id: 'UA-155856855-1'
  },

  // reCAPTCHA module configuration
  recaptcha: {
    hideBadge: true,
    siteKey: '6LcN3s0UAAAAAN45Ud84tqcv0rnMfYklkUsMQYLO',
    version: 3
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    customProperties: true,
    theme: {
      dark: false,
      themes: {
        light: {
          accent: colors.amber.darken2,
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
    // optimization: {
    //   minimize: true,
    // }
  },

  // colorMode Configuration
  colorMode: {
    preference: 'system',
    fallback: 'light',
  }
}
