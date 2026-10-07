/* Tiny inline icon set — no icon library needed. */

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const Svg = ({ children, ...props }) => (
  <svg {...base} {...props} aria-hidden="true" focusable="false">
    {children}
  </svg>
)

export const IconCode = (p) => (
  <Svg {...p}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="14" y1="4" x2="10" y2="20" /></Svg>
)

export const IconReact = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="2.1" />
    <ellipse cx="12" cy="12" rx="10" ry="4.3" />
    <ellipse cx="12" cy="12" rx="10" ry="4.3" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.3" transform="rotate(120 12 12)" />
  </Svg>
)

export const IconBrush = (p) => (
  <Svg {...p}><path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 114.03 4.03l-8.06 8.08" /><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 00-3-3.02z" /></Svg>
)

export const IconTools = (p) => (
  <Svg {...p}><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></Svg>
)

export const IconGithub = (p) => (
  <Svg {...p}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0019.5 4.77 5.07 5.07 0 0019.41 1s-1.21-.35-4 1.52a13.38 13.38 0 00-7 0C5.62.65 4.41 1 4.41 1a5.07 5.07 0 00-.09 3.77A5.44 5.44 0 002.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></Svg>
)

export const IconLinkedin = (p) => (
  <Svg {...p}><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-13h4v1.8A6 6 0 0116 8z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></Svg>
)

export const IconTelegram = (p) => (
  <Svg {...p}><path d="M21.5 3.5L2.8 10.6c-.9.35-.88 1.63.03 1.95l4.6 1.6 1.77 5.3c.27.8 1.3 1 1.86.37l2.5-2.77 4.7 3.45c.66.49 1.6.13 1.77-.67l3.1-14.6c.18-.86-.67-1.58-1.63-1.23z" /><path d="M7.43 14.15L18.3 6.6l-8.05 8.9" /></Svg>
)

export const IconMail = (p) => (
  <Svg {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6l-10 7L2 6" /></Svg>
)

export const IconPhone = (p) => (
  <Svg {...p}><path d="M22 16.9v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.2 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.1 9.9a16 16 0 006 6l1.26-1.26a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.9z" /></Svg>
)

export const IconPin = (p) => (
  <Svg {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></Svg>
)

export const IconArrow = (p) => (
  <Svg {...p}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></Svg>
)

export const IconExternal = (p) => (
  <Svg {...p}><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></Svg>
)

export const IconDownload = (p) => (
  <Svg {...p}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></Svg>
)

export const IconUp = (p) => (
  <Svg {...p}><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></Svg>
)

export const IconSpark = (p) => (
  <Svg {...p}><path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4L12 3z" /></Svg>
)

export const IconLayers = (p) => (
  <Svg {...p}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></Svg>
)

export const skillIcons = {
  code: IconCode,
  react: IconReact,
  brush: IconBrush,
  tools: IconTools,
}
