const vars = require('./.env.json');

module.exports = {
  description: 'Create a Widget for your ERC20, BEP20 or OLY20 Token and share it with your users. Add your Token to DApp browsers or MetaMask.',
  base: '/metamask/',
  plugins: [
    ['@vuepress/google-analytics', {
      ga: vars.gaId,
    }],
    ['vuepress-plugin-facebook-pixel', {
      pixelId: vars.fbPixelId,
    }],
  ],
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://polis.tools/metamask' }],
    ['meta', { property: 'og:image', content: 'https://polis.tools/metamask/assets/images/watch-token.jpg' }], // eslint-disable-line max-len
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:image', content: 'https://polis.tools/metamask/assets/images/watch-token.jpg' }], // eslint-disable-line max-len
    ['meta', { property: 'twitter:title', content: 'WatchToken | Create a Widget for your ERC20, BEP20 or OLY20 Token' }],
    ['script', { src: '/assets/js/web3.min.js' }],
    ['script',
      {
        src: 'https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1', // eslint-disable-line max-len
        defer: true,
      },
    ],
  ],
  defaultNetwork: vars.defaultNetwork,
  infuraProjectId: vars.infuraProjectId,
  bitlyAccessToken: vars.bitlyAccessToken,
};
