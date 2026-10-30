# Editrix documentation site

Static documentation for [Editrix](https://github.com/Brand-Industry/craft-editrix), the Craft CMS search and replace plugin, published at <https://editrix.thebrandindustry.com>. Built with [VitePress](https://vitepress.dev).

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # static site in docs/.vitepress/dist
npm run preview   # serve the build
```

## Two versions

| URL | Covers | Plugin branch |
| --- | --- | --- |
| `/` | Editrix 2.0 for Craft 5 | `craft-5` |
| `/craft-4/` | Editrix 1.2 for Craft 4 | `main` and `craft-4` |

Both trees have the same page names. Each version has its own sidebar, navigation and search index, and the **Craft 5 / Craft 4** dropdown in the navigation switches between them.

The pages are adapted from the `docs/` folder of each plugin branch. When a plugin release changes its docs, update the matching tree here. To see what differs between the two lines:

```bash
git diff main craft-5 -- docs README.md CHANGELOG.md
```

## Where things live

| Path | What it holds |
| --- | --- |
| `docs/*.md` | Craft 5 pages. Each file is one URL |
| `docs/craft-4/*.md` | Craft 4 pages |
| `docs/.vitepress/config.mts` | Navigation, sidebar and site settings for both versions |
| `docs/public/img/` | Control panel screenshots used in the pages |
| `docs/public/brand/` | Logo and hero banner, light and dark |
| `docs/public/CNAME` | Custom domain for GitHub Pages |
| `docs/.vitepress/theme/custom.css` | Brand colors, type and accessibility rules |
| `docs/.vitepress/theme/components/` | `<Shot>` (screenshot with caption) and `<HeroBanner>` |

To add a screenshot to a page:

```md
<Shot src="/img/results.jpg" alt="What the screenshot shows." caption="Optional caption." />
```

## Deploy

### GitHub Pages

1. Push this folder to a GitHub repository with `main` as the default branch.
2. In **Settings, Pages**, set the source to **GitHub Actions** and the custom domain to `editrix.thebrandindustry.com`.
3. Push to `main`. `.github/workflows/deploy.yml` builds and publishes the site. It also sets `DOCS_FEEDBACK_URL`, which turns on the "Report a problem with this page" link and points it at this repository's issues.

The repository lives in the `Brand-Industry` organization. DNS: create a `CNAME` record for `editrix` on `thebrandindustry.com` that points to `brand-industry.github.io`. Then turn on **Enforce HTTPS** in the Pages settings once the certificate is issued.

GitHub Pages on an organization repository needs the repository to be public, unless the organization's plan includes Pages for private repositories.

### Vercel

Import the repository in Vercel and add `editrix.thebrandindustry.com` under **Settings, Domains**. Vercel shows the DNS record to create, usually a `CNAME` for `editrix` pointing to `cname.vercel-dns.com`. `vercel.json` already sets the build command, the output folder and clean URLs. The `CNAME` file in `docs/public` is only read by GitHub Pages and is harmless on Vercel.

## Environment variables

| Variable | Effect |
| --- | --- |
| `DOCS_BASE` | Base path of the site. Defaults to `/`. Set it only to preview under a sub-path |
| `DOCS_FEEDBACK_URL` | Pattern for the "Report a problem with this page" link, for example `https://github.com/<owner>/<repo>/issues/new?title=Docs%3A%20:path`. The link is hidden when it is not set |
