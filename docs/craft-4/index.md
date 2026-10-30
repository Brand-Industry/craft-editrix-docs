---
title: Editrix for Craft CMS
description: Find text across a Craft site, preview a replacement, apply it and revert it value by value.
---

# Editrix for Craft CMS

<HeroBanner />

<p class="lead">Editrix finds text across a Craft site, shows what a replacement would change, applies it, and keeps a log you can revert from, value by value.</p>

It searches entries, globals, Matrix and Neo blocks, and rich text fields (CKEditor, Redactor). Every replace is written to a log before any entry is saved, so a replace that is cancelled or interrupted can still be reverted. The work runs on Craft's queue, so a large site does not hit a request time limit. Editrix follows Craft's own permissions: people only find and change the entries they can already open and save in Craft.

These pages cover Editrix 1.2 for Craft 4. Running Craft 5? Read the [Craft 5 documentation](/), which covers Editrix 2.0.

## What you can do with it

- Search plain text or a regular expression, with case-insensitive and whole-word matching. See [Searching](searching.md).
- Search the `href` of links and the `src` of images inside rich text, so a domain change updates the link text and the link in one pass.
- Read a before and after preview of each change, or run a dry run that saves nothing. See [Replacing](replacing.md).
- Leave single matches out of a replace.
- Undo a replace one value at a time. A value edited after the replace is not overwritten. See [Logs and revert](logs-and-revert.md).
- Limit a search to sections, entry types and fields, or search several sites at once (Pro).
- Search, replace and revert from the terminal, in a deployment or in cron (Pro). See [Command line](command-line.md).

## Requirements

| | Minimum |
| --- | --- |
| Craft CMS | 4.0 |
| PHP | 8.0.2 |

## Installation

From the root of your Craft project:

```bash
composer require brand-industry/craft-editrix
php craft plugin/install editrix
```

You can also install it from **Settings, Plugins** in the control panel. If `php craft up` later shows a project config notice after an update, see [Installation and updating](installation.md).

## Quick start

1. Open **Editrix** in the control panel and choose **New Operation**.
2. Enter the text to find. Add a replacement to use Search & Replace.
3. Choose the options you need: regular expression, case, whole words.
4. Run the search and review the rows it found.
5. Open a row to see the original and proposed text, then select the rows to change and click **Replace Selected**.
6. Find the operation under **Logs & History**, where you can revert it.

<Shot src="/img/search-replace-form.jpg" alt="The Search and Replace form with the Find and Replace with boxes, option checkboxes for regular expression, case, whole words, link addresses and preserve case, a Dry Run switch, and checkboxes for entries, globals, Matrix fields and categories." caption="Steps 2 and 3. The Find and Replace with boxes sit above the options." />

## Editions

Editrix has two paid editions, Standard (USD 19) and Pro (USD 99). Either one can be tried without charge in a development or staging environment, and a license covers one production site. [Editions](editions.md) lists what each one includes, with the exact limits.

## Where to go next

| Page | What it covers |
| --- | --- |
| [Installation and updating](installation.md) | Installing, permissions, and what to do when `craft up` shows a project config notice |
| [Searching](searching.md) | What is searched, the options, scope, and how results are shown |
| [Replacing](replacing.md) | Previewing, replacing, confirmations, and what is skipped or refused |
| [Logs and revert](logs-and-revert.md) | The history of operations and how to undo a replace |
| [Large sites and the queue](large-sites.md) | Queue setup, limits, and how searches stay fast on big sites |
| [Settings](configuration.md) | Every setting, in the control panel and in `config/editrix.php` |
| [Command line](command-line.md) | Search, replace and revert from the terminal (Pro) |
| [Editions](editions.md) | What Standard and Pro include, with the exact limits |
| [Troubleshooting](troubleshooting.md) | Messages you may see and what they mean |

## Support

Report a problem or ask a question in [GitHub Issues](https://github.com/brand-industry/craft-editrix/issues), or write to [lalonso@tbi.com.mx](mailto:lalonso@tbi.com.mx).

Editrix is released under the Craft License. Each license covers one production site.
