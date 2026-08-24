# photocull-site — plan

## Vision

A single, honest download page for PhotoCull at `photocull.infrarg.com`.
Clear install steps for an unsigned app, a plain explanation of why the OS
warnings appear, and a config-driven release list so adding a platform is an
edit, not a rebuild.

## Milestones

- [x] **M1 — Launch, macOS Apple Silicon only.** Scaffold the site, ship the
      page with one working download, Windows and Intel macOS shown as
      "coming soon."
- [ ] **M2 — Windows build added.** Once `Photography` has a validated 0.x.y
      Windows installer: flip `win-x64` to available in `release.ts`.
- [ ] **M3 — Intel macOS build added.** Blocked on how that build gets made
      (CI runner vs. Rosetta) — Ross's call, tracked in `Photography`'s pulse,
      not this project's problem to solve.
- [ ] **M4 — Screenshots.** A scrubbed sample-shoot screenshot or two in the
      hero/getting-started sections, once captured (SECURITY.md T0 — no real
      library paths or personal photos visible).
- [ ] **M5 — App icon.** Once `Photography` ships a real app icon (not the
      default Electron one), reflect it in the download cards / favicon.

## Notes

- Not gated on `PLAN.md` cadence like `website` — this is a small enough site
  that milestones can land whenever the underlying app build exists.
