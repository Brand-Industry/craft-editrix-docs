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

const ogImage = `${siteUrl}/brand/og-image.png`

// One meta description per page, so search results do not show the same sentence 22 times.
// The version label is added in transformPageData.
const descriptions: Record<string, string> = {
  index: 'Search and replace content in Craft CMS with a preview, a log of every change and a revert for each value.',
  installation: 'Install Editrix, set permissions and update it without the project config notice.',
  searching: 'What Editrix searches, the options, the scope, whose permissions apply and how results are shown.',
  replacing: 'Preview, dry run, replace and skip rules: how Editrix applies a replacement and what it refuses.',
  'logs-and-revert': 'How Editrix logs every replace and reverts it value by value.',
  configuration: 'Every Editrix setting, in the control panel and in config/editrix.php.',
  'large-sites': 'Set up the queue, understand the limits and keep Editrix searches fast on large sites.',
  'command-line': 'Search, replace and revert from the terminal with the Editrix console commands (Pro).',
  editions: 'What Standard and Pro include in Editrix, with the exact limits and prices.',
  troubleshooting: 'Messages you may see in Editrix and what they mean.',
  changelog: 'Release notes for Editrix.'
}

function pageInfo(relativePath: string) {
  const v4 = relativePath.startsWith('craft-4/')
  const slug = relativePath.replace(/^craft-4\//, '').replace(/\.md$/, '')
  // index.md is served at the folder URL: "/" and "/craft-4/". Every other page has no trailing slash.
  const path = '/' + relativePath.replace(/\.md$/, '').replace(/(^|\/)index$/, '$1')
  return { v4, slug, path }
}

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
  lastUpdated: true,

  sitemap: {
    hostname: siteUrl,
    // Craft 5 and Craft 4 are versions, not languages. Without this the sitemap lists them as hreflang
    // alternates of each other, and both are en-US, which search engines read as conflicting signals.
    transformItems: (items) => items.map(({ links, ...item }) => item)
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    ['meta', { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' }],
    ['meta', { name: 'theme-color', content: '#0f0e1c', media: '(prefers-color-scheme: dark)' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:site_name', content: 'Editrix Docs' }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'Editrix, advanced content search and replace for Craft CMS' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],

  transformPageData(pageData) {
    const { v4, slug } = pageInfo(pageData.relativePath)
    const text = descriptions[slug]
    if (!text) return
    const version = v4 ? 'Editrix 1.2 for Craft 4' : 'Editrix 2.0 for Craft 5'
    pageData.description = `${text} ${version}.`
    pageData.frontmatter.description = pageData.description
  },

  transformHead({ pageData, title, description }) {
    // The 404 page must never be indexed.
    if (pageData.isNotFound) return [['meta', { name: 'robots', content: 'noindex' }]]
    const url = siteUrl + pageInfo(pageData.relativePath).path
    return [
      // Each page names itself as canonical. The same page also answers at /page.html on GitHub Pages.
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: ogImage }]
    ]
  },

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
