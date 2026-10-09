/**
 * The one file that changes when a new PhotoCull version ships. Nothing else
 * on the site hardcodes a version, filename, or download URL — add a build,
 * flip `available: true`, fill in size/sha256, done.
 *
 * Source of truth for the app itself: ~/Projects/PhotoCull (public repo ossger/PhotoCull).
 * This project reads its README/CLAUDE.md/CHANGELOG.md for content but never
 * writes there — see photocull-site/CLAUDE.md.
 */

const REPO = 'ossger/photocull-releases';

export const version = '0.4.1';

/** Public beta: shows a Beta badge and a report-issues line on the page. */
export const beta = true;
export const releaseNotesUrl = `https://github.com/${REPO}/releases/tag/v${version}`;
export const changelogUrl = `https://github.com/${REPO}/releases`;

export interface Download {
  id: 'mac-arm64' | 'mac-x64' | 'win-x64';
  platform: string;
  label: string;
  icon: string;
  available: boolean;
  file?: string;
  size?: string;
  sha256?: string;
  note?: string;
}

export const downloads: Download[] = [
  {
    id: 'mac-arm64',
    platform: 'macOS',
    label: 'Apple Silicon (M1 and newer)',
    icon: '🍎',
    available: true,
    file: `PhotoCull-${version}-macOS-arm64.dmg`,
    size: '257 MB',
    sha256: '6d494235808339e778d5ebdbb86aeff0607c6a1a735d5b948e1d4d9b9fbbc37c',
  },
  {
    id: 'mac-x64',
    platform: 'macOS',
    label: 'Intel',
    icon: '🍎',
    available: true,
    file: `PhotoCull-${version}-macOS-x64.dmg`,
    size: '305 MB',
    sha256: '64b347011c3bbac6568d8323cb81a81f1d1484ba7894fbfc5c3b16a7b2cc8d2e',
  },
  {
    id: 'win-x64',
    platform: 'Windows',
    label: '64-bit',
    icon: '🪟',
    available: false,
    note: 'Coming soon',
  },
];

export const downloadUrl = (d: Download) =>
  `https://github.com/${REPO}/releases/download/v${version}/${d.file}`;
