/**
 * The one file that changes when a new PhotoCull version ships. Nothing else
 * on the site hardcodes a version, filename, or download URL — add a build,
 * flip `available: true`, fill in size/sha256, done.
 *
 * Source of truth for the app itself: C:\projects\Photography (private repo).
 * This project reads its README/CLAUDE.md/CHANGELOG.md for content but never
 * writes there — see photocull-site/CLAUDE.md.
 */

const REPO = 'ossger/photocull-releases';

export const version = '0.3.0';
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
    // size/sha256 are filled in once the build is uploaded — see the manual
    // step in vault\Pulse\_manual-steps.md.
  },
  {
    id: 'mac-x64',
    platform: 'macOS',
    label: 'Intel',
    icon: '🍎',
    available: false,
    note: 'Coming soon',
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
