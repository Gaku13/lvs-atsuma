const environment = process.env.NODE_ENV || 'local'
const env = require(`./env/${environment}.js`)

module.exports = {
  generate: {
    fallback: true,
    dir: 'docs'
  },
  mode: 'spa',
  target: 'static',
  router: {
    base: env.BASE_URL
  },
  head: {
    title: '厚真町 Local Venture School',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      {
        charset: 'utf-8'
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }, {
      }, {
        name: 'robots',
        content: 'noindex'
      }, {
      }, {
        name: 'googlebot',
        content: 'noindex'
      }, {
        hid: 'description',
        name: 'description',
        content: '厚真町 Local Venture School'
      }, {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      }, {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '厚真町 Local Venture School'
      }, {
        hid: 'og:url',
        property: 'og:url',
        content: ''
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: '厚真町 Local Venture School'
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: '厚真町 Local Venture School'
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://gaku13.github.io/ai-talk/og-image.png'
      }, {
        name: 'application-name',
        content: '厚真町 LVS'
      },
      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-TileImage", content: `${env.BASE_URL}mstile-150x150.png` },
      { name: "msapplication-config", content: `${env.BASE_URL}browserconfig.xml` },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${env.BASE_URL}favicon.ico` },
      { rel: 'apple-touch-icon', type: 'image/png', href: `${env.BASE_URL}apple-touch-icon.png` },
      { rel: "icon", type: "image/png", href: `${env.BASE_URL}favicon-16x16.png`, sizes: "16x16" },
      { rel: "icon", type: "image/png", href: `${env.BASE_URL}favicon-32x32.png`, sizes: "32x32" },
      { rel: "icon", type: "image/png", href: `${env.BASE_URL}android-chrome-192x192.png`, sizes: "192x192" },
      { rel: "icon", type: "image/png", href: `${env.BASE_URL}android-chrome-512x512.png`, sizes: "512x512" },
      { rel: "manifest", href: `${env.BASE_URL}site.webmanifest` },
      { rel: "mask-icon", href: `${env.BASE_URL}safari-pinned-tab.svg`, color: "#5bbad5" },
      { rel: "shortcut icon", href: `${env.BASE_URL}favicon.ico` }
    ]
  },
  //loading: false,
  loading: {
    color: '#136F63',
    height: '2px',
    throttle: 0
  },
  css: [
    '~/assets/css/style.styl'
  ],
  plugins: [
    {
      src: '~/plugins/vue-parallax-js',
      ssr: false
    }, '~/plugins/scroll', '~/plugins/vue-scrollto'
  ],
  modules: [
    '@nuxtjs/svg',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/google-analytics', {
        id: ''
      }
    ],
  ],
  styleResources: {
    stylus: './assets/css/_variables.styl'
  },
  /*
  build: extend = function(config, ctx) {
    plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    return pass;
  }
  */
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    }
  }
}
