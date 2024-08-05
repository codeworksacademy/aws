import { defineConfig } from 'vitepress'
import { scanDir } from './utils/sidebar'
import path from 'path'


// https://vitepress.dev/reference/site-config
export default defineConfig({

  vite: {
    resolve: {
      alias: {
        '~bootstrap': path.resolve(__dirname, '../node_modules/bootstrap'),
      }
    }
  },


  title: "CodeWorks WebDev Fundamentals",
  description: "",
  cleanUrls: false, // ANCHOR might break something later
  head: [
    ['link', { rel: 'icon', href: 'https://bcw.blob.core.windows.net/public/img/9977764104160066' }]
  ],
  markdown: {
    config: (md) => {
      // review for md extensions
    }
  },
  appearance: 'force-dark',
  outDir: './dist',
  themeConfig: {
    siteTitle: false,
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/logo.png',
      dark: '/logo-dark.png',
      alt: 'CodeWorks Logo',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Account', link: '/account' },

    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: scanDir('docs/getting-started'),
        collapsed: false
      },
      {
        text: 'EC2 - Elastic Compute Cloud',
        items: scanDir('docs/ec2'),
        collapsed: false
      },
      {
        text: 'S3 - Simple Storage Service',
        items: scanDir('docs/s3'),
        collapsed: true
      },
      {
        text: 'Cloudflare CDN',
        items: scanDir('docs/cloudflare'),
        collapsed: true
      },
      {
        text: '🐳 Docker',
        items: scanDir('docs/docker'),
        collapsed: true
      },
      {
        text: 'Quick Tips',
        items: scanDir('docs/tips'),
        collapsed: true
      },

    ],
    // editLink: {
    //   pattern: 'https://github.com/codeworksacademy/web-foundations/edit/main/:path',
    //   text: 'Edit this page on GitHub'
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/codeworksacademy' },
      { icon: 'facebook', link: 'https://facebook.com/boisecodeworks' },
    ]
  },
  lastUpdated: true
})
