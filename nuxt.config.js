export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/icon.png'
      },
      {
        rel: 'icon',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css'
      }
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/41fc25a21c.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/swiper', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/eslint-module'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
    'nuxt-rfg-icon',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'fullpage-nuxt',
    [
      'vue-scrollto/nuxt',
      {
        container: 'body',
        duration: 500,
        easing: 'ease-in-out',
        offset: 0,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
      }
    ]
  ],

  styleResources: {
    scss: ['~/assets/scss/_config.scss']
  },

  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
