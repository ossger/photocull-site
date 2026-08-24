# photocull-site

The public download page for [PhotoCull](https://photocull.infrarg.com) — a
desktop photo-culling app for photographers. A small, static Astro site: hero,
download cards, install instructions (including the Gatekeeper/SmartScreen
workarounds for an unsigned app), and system requirements.

Sibling to `goldenbridges.infrarg.com` under the InfraRG umbrella — see the
orchestrator's `PROJECTS.md`.

## Run

```bash
npm install
npm run dev      # → http://localhost:4321
npm run build    # → dist/
npm run check    # type-check
```

## Updating for a new release

Everything version-specific lives in one file: `src/config/release.ts`. To add
a platform or bump the version:

1. Build and tag the new version in `C:\projects\Photography` (see that repo's
   README "Releases" section).
2. Upload the installer(s) to `ossger/photocull-releases` as release assets
   (`gh release upload vX.Y.Z <file>`).
3. Edit `src/config/release.ts` — bump `version`, flip the relevant
   `Download.available` to `true`, fill in `file`, `size`, and `sha256`.
4. `npm run check && npm run build`, then commit and push (Cloudflare Pages
   auto-deploys from the Git integration).

## Deploy

Static site, deployed via Cloudflare Pages (Git integration) to
`photocull.infrarg.com`. Build command `npm run build`, output directory `dist`.

## Where content comes from

This site's copy (feature list, hotkeys, supported formats, install caveats)
is sourced from `C:\projects\Photography`'s `README.md`, `CHANGELOG.md`, and
`packaging/README.md` — **read-only**. This project never writes to
`Photography`; see that repo's own `CLAUDE.md` for its release process.
