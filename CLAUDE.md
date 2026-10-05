# photocull-site — Operating Instructions

The public download page for PhotoCull, at `photocull.infrarg.com`. A single
static page: hero, download cards, install instructions, system requirements.
Built with **Astro 5**, static output, no framework beyond that — no Tailwind,
no MDX, no content collections. This is a one-page site; keep it that way
unless the scope genuinely grows.

Roadmap (if any): `PLAN.md`.

> Native runtime: Windows, git bash + PowerShell 7. Node 20+.

---

## What this is (and isn't)

- This is **not** part of the Golden Bridges / Golden Steps site
  (`~/Projects/website`). Different audience (photographers, not older
  adults), different brand, own repo and deploy pipeline. Don't import its
  components, theme, or accessibility toolbar — this site's design is
  intentionally its own (dark-first).
- This is **not** the PhotoCull app itself. The app's source lives in
  `~/Projects/Photography` (public on GitHub, MIT, since 2026-10-05). This project reads that repo's
  `README.md`, `CHANGELOG.md`, and `packaging/README.md` for content —
  **read-only**. Never write to `Photography` from a session here; a
  correction to the app's own docs belongs in that project.

## The one file that changes per release

`src/config/release.ts` holds the version number, download filenames, sizes,
and SHA-256 hashes. Nothing else in the site hardcodes any of that — a new
build or platform is a config edit, not a template change. See `README.md`
"Updating for a new release" for the full sequence.

## Content rules

- Every install-warning claim (Gatekeeper, SmartScreen, ad-hoc signing, first-
  run internet requirement) must stay accurate to what `Photography`'s
  `packaging/README.md` actually documents — don't soften or invent past what
  that repo states.
- Downloads link to `ossger/photocull-releases`. The source repo
  (`ossger/Photography`) is public, so linking its README, issues, or
  `BACKLOG.md` is fine.
- Publish a SHA-256 hash for every available download, and never claim a hash
  you haven't been given for that exact file.

## Project Pulse — cross-project context

Every project under `~/Projects` publishes a one-screen pulse note into the
shared Obsidian vault; every session reads them all. Contract + template:
`~/Projects/vault/Pulse/README.md`.

- **Session start:** read `~/Projects/vault/Pulse/*.md`.
- **Session end (substantive work only):** refresh
  `~/Projects/vault/Pulse/photocull-site.md` — status, now/next, decisions;
  bump `updated:` — then commit only that file in the vault repo.
- Edit only this project's own note.

## Security & data handling

Binding rules: `~/Projects/SECURITY.md` (data tiers + checkpoints).

- **Tiers this project produces:** T0 only — a public static site with a
  public GitHub remote. Treat every commit as already published.
- **Where each lives:** everything in this repo.
- **Remote:** GitHub (public) — everything committed must be T0.
- **Never leaves the machine:** n/a.
