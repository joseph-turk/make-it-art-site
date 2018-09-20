module.exports = {
  head: {
    title: 'Make it Art',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'The front end of Make it Art'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: ['bulma/css/bulma.min.css', '~/css/main.css'],
  loading: { color: '#00d1b1' },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  },
  generate: {
    fallback: true
  },
  router: {
    linkActiveClass: 'is-active'
  },
  env: {
    apiUrl: process.env.API_URL || 'http://localhost:8000'
  },
  plugins: ['~/plugins/directives.js']
}
