/** Site-wide constants — the small handful this one-page site needs. */
export const siteConfig = {
  url: 'https://photocull.infrarg.com',
  name: 'PhotoCull',
  tagline: 'A desktop culling app for photographers',
  description:
    'PhotoCull groups a shoot into scenes, scores every frame for focus, eyes-open, exposure, and aesthetic, then exports your picks as XMP sidecars for Lightroom or Capture One.',
  themeColor: '#0b0e14',

  notify: {
    /**
     * Formspree endpoint for "email me when this build ships" on a not-yet-
     * available download card (Windows, Intel macOS). Own form, separate
     * from Golden Bridges' inbox — different audience, different list.
     * Empty = the card falls back to a plain "Coming soon" badge, no form.
     */
    endpoint: '',
  },
};
