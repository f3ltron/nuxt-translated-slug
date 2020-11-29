export default {
  target: 'static',
  head: {
    title: 'translate-slug',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'how to create translated slug url with nuxt',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          contact: 'Contact Me',
          changeLocale: 'Switch locale',
        },
        fr: {
          contact: 'Me Contacter',
          changeLocale: 'Changer la locale',
        },
      },
    },
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  modules: [
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_TOKEN,
        cacheProvider: 'memory',
      },
    ],
  ],
  axios: {},
  build: {},
}
