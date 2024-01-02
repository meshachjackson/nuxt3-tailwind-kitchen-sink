import type { AppConfigInput } from 'nuxt/schema'

export default defineAppConfig({
  awesome: {
    name: 'FanFair',
    description:
      'A directory of the Elite and Exclusive events, products, and services provided locally during Superbowl Weekend. Updated annually to highlight the host city of each Superbowl.',
    project: {
      links: {
        github: 'https://github.com/meshachjackson/fanfaire-vbeta',
      },
    },
    layout: {
      page: {
        navbar: {
          menus: [
            { type: 'link', title: 'Home', to: { name: 'home' } },
            { type: 'link', title: 'Blank', to: { name: 'blank' } },
            { type: 'link', title: 'Post', to: { name: 'post' } },
            { type: 'link', title: 'Test', to: { name: 'test' } },
            {
              type: 'dropdown',
              title: 'Documentation',
              children: [
                {
                  type: 'link',
                  title: 'Components',
                  to: { name: 'docs-components' },
                },
              ],
            },
            { type: 'button', title: 'Settings', to: { name: 'setting' } },
            // dynamic title
            // {
            //   type: 'button',
            //   title: (nuxt) =>
            //     (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            //   to: (nuxt) => (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            // },
          ],
        },
      },
      footer: {
        year: new Date().getFullYear(),
      },
      welcome: {
        title: 'FANfair fanFAIR FanFair',
        disableInfoReplaceIndexInWelcomePage: true,
      },
    },
    author: {
      name: 'meshachjackson',
      links: {
        github: 'https://github.com/meshachjackson',
        website: 'https://meshach.co',
      },
    },
  },
})
