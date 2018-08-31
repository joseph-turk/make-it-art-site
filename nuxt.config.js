module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Make it Art",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "The front end of Make it Art"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: ["bulma/css/bulma.min.css", "~/css/main.css"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#00d1b1" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  generate: {
    fallback: true
  },
  plugins: ["~/plugins/global-components"],
  router: {
    linkActiveClass: "is-active"
  }
};
