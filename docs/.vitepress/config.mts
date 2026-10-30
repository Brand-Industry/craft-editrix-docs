import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'

const siteUrl = 'https://editrix.thebrandindustry.com'
const pluginRepo = 'https://github.com/Brand-Industry/craft-editrix'

// The site is served from the root of its own domain. Set DOCS_BASE only to preview under a sub-path.
const base = process.env.DOCS_BASE ?? '/'
// Pattern for the "Edit this page" link, for example https://github.com/<owner>/<repo>/edit/main/docs/:path
const editUrl = process.env.DOCS_EDIT_URL

// Craft 5 (Editrix 2.x) lives at the root, Craft 4 (Editrix 1.x) under /craft-4/.
// Both trees have the same pages, so the navigation is built once for each prefix.

function nav(prefix: string, current: string): DefaultTheme.NavItem[] {
  const docsMatch = prefix
    ? `^${prefix}/(?!editions|changelog)`
    : `^/(?!craft-4/|editions|changelog)`
  return [
    { text: 'Docs', link: `${prefix}/`, activeMatch: docsMatch },
    { text: 'Editions', link: `${prefix}/editions` },
    { text: 'Changelog', link: `${prefix}/changelog` },
    { text: 'Issues', link: `${pluginRepo}/issues` },
    {
      text: current,
      items: [
        { text: 'Craft 5, Editrix 2.0', link: '/' },
        { text: 'Craft 4, Editrix 1.2', link: '/craft-4/' }
      ]
    }
  ]
}

function sidebar(prefix: string): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting started',
      items: [
        { text: 'Overview', link: `${prefix}/` },
        { text: 'Installation and updating', link: `${prefix}/installation` },
        { text: 'Editions', link: `${prefix}/editions` }
      ]
    },
    {
      text: 'Using Editrix',
      items: [
        { text: 'Searching', link: `${prefix}/searching` },
        { text: 'Replacing', link: `${prefix}/replacing` },
        { text: 'Logs and revert', link: `${prefix}/logs-and-revert` }
      ]
    },
    {
      text: 'Configuration',
      items: [
        { text: 'Settings', link: `${prefix}/configuration` },
        { text: 'Large sites and the queue', link: `${prefix}/large-sites` },
        { text: 'Command line', link: `${prefix}/command-line` }
      ]
    },
    {
      text: 'Reference',
      items: [
        { text: 'Troubleshooting', link: `${prefix}/troubleshooting` },
        { text: 'Changelog', link: `${prefix}/changelog` }
      ]
    }
  ]
}

const description =
  'Documentation for Editrix, the Craft CMS plugin that finds text across your content, previews a replacement, applies it and lets you revert it.'

export default defineConfig({
  lang: 'en-US',
  title: 'Editrix Docs',
  description,
  base,
  cleanUrls: true,
  sitemap: { hostname: siteUrl },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Editrix Docs' }],
    ['meta', { property: 'og:image', content: `${siteUrl}/brand/hero-banner-light.png` }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],

  // Each version is a locale so it gets its own search index, sidebar and navigation.
  locales: {
    root: {
      label: 'Craft 5',
      lang: 'en-US',
      titleTemplate: ':title | Editrix Docs',
      themeConfig: { nav: nav('', 'Craft 5'), sidebar: sidebar('') }
    },
    'craft-4': {
      label: 'Craft 4',
      lang: 'en-US',
      link: '/craft-4/',
      titleTemplate: ':title | Editrix Docs for Craft 4',
      themeConfig: { nav: nav('/craft-4', 'Craft 4'), sidebar: sidebar('/craft-4') }
    }
  },

  themeConfig: {
    logo: {
      light: '/brand/imagotipo-light.svg',
      dark: '/brand/imagotipo-dark.svg',
      alt: 'Editrix',
      width: 88,
      height: 28
    },
    siteTitle: false,

    socialLinks: [{ icon: 'github', link: pluginRepo, ariaLabel: 'Editrix on GitHub' }],

    search: { provider: 'local' },

    outline: { level: [2, 3], label: 'On this page' },

    docFooter: { prev: 'Previous page', next: 'Next page' },

    editLink: editUrl ? { pattern: editUrl, text: 'Edit this page on GitHub' } : undefined,

    footer: {
      message: 'Editrix is released under the Craft License. One license covers one production site.',
      copyright: 'Brand Industry'
    }
  }
})
