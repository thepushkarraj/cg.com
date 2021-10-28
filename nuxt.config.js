import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - CamperGold',
    title: 'CamperGold',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'CamperGold' },
      { name: 'facebook-domain-verification', content: 'k8lfms1dq94sq5znb2ydag3rv1421j' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // ...
    'quill/dist/quill.core.css',
    // for snow theme
    'quill/dist/quill.snow.css',
    // for bubble theme
    'quill/dist/quill.bubble.css',
    '~/assets/main.css'
    // ...
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: true },
    { src: '~/plugins/nuxt-quill-plugin', ssr: false },
    { src: '~/plugins/import-design-elements' },
    { src: '~/plugins/globalfn' },
    { src: '~/plugins/country' },
    { src: '~/plugins/langadmin' },
    { src: '~/plugins/i18n' },
    // { src: '~/plugins/langfront' },
    { src: '~/plugins/api' },
    { src: '~/plugins/owl.js', ssr: false },
    { src: '~/plugins/photoswipe.js', ssr: false },
    { src: '~/plugins/apexchart.js', ssr: false },
    { src: '~/plugins/mapbox.js', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    ['nuxt-gmaps', {
      key: 'AIzaSyDugyeq-yapp0Zf8Zke4nA0xHevozL7LGo'
      //  you can use libraries: ['places']
    }],
    ['@nuxtjs/i18n', {
      strategy: 'prefix_except_default',
      locales: [
        {
          code: 'de',
          file: 'de_DE.js'
        },
        {
          code: 'us',
          file: 'en_US.js'
        },
        {
          code: 'gb',
          file: 'en_UK.js'
        },
        {
          code: 'ca',
          file: 'en_CA.js'
        },
        {
          code: 'tw',
          file: 'zh_TW.js'
        },
        {
          code: 'cn',
          file: 'zh_ZH.js'
        },
        {
          code: 'nl',
          file: 'nl_NL.js'
        }
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'de',
    }]
  ],
  i18n: {
    vueI18n: {
      fallbackLocale: 'de'
    }
  },
  router: {
    middleware: 'auth'
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: '#37517e',
          green: '#31d06e'
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  env: {
    apiBase: 'https://campergold.com/web/api/',
    mediaBase: 'https://campergold.com/web'
    // apiBase: 'https://cg.stegpearl.in/web/api/',
    // mediaBase: 'https://cg.stegpearl.in/web'
  }
}
