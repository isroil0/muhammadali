/* ------------------------------------------------------------------
   Language-neutral data. Anything that needs translating lives in
   src/i18n/translations.js instead.
   ------------------------------------------------------------------ */

export const profile = {
  firstName: 'Gayratov',
  lastName: 'Muhammadali',
  initials: 'GM',
  photo: './photo.jpg',
  resumeUrl: '#',
  email: 'gayratovmuhammadali775@gmail.com',
  phone: '+998 77 777 50 37',
  socials: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/in/',
    telegram: 'https://t.me/m777775037',
  },
}

/** Which icon each skill group gets — matches the order of
 *  `skills.groups` in every language file. */
export const skillIconOrder = ['code', 'react', 'brush', 'tools']

/** Scrolling tech strip — technology names are the same everywhere. */
export const marqueeItems = [
  'React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS',
  'Vite', 'Node.js', 'Figma', 'Git', 'REST API', 'Framer Motion', 'Firebase',
]

/** Non-text project data — matches the order of `projects.items`
 *  in every language file. */
export const projectMeta = [
  {
    glyph: 'OY',
    cover: 'aqua',
    year: '2025',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Telegram API'],
    demo: 'https://oceanicyork.uz',
    code: null,      // client project — no public repo
    live: true,      // real site, so the link reads "Visit website"
  },
  {
    glyph: 'TR',
    cover: 'gym',
    year: '2025',
    stack: ['Next.js', 'React', 'REST API', 'Railway'],
    demo: 'https://troya.775.uz',
    code: null,      // client project — no public repo
    live: true,      // real site, so the link reads "Visit website"
  },
  {
    glyph: 'IS',
    cover: 'warehouse',
    year: '2026',
    stack: ['React', 'Vite', 'Material UI', 'REST API'],
    demo: 'https://ismoil.775.uz',
    code: null,      // client project — no public repo
    live: true,      // real site, so the link reads "Visit website"
  },
]

/** Section ids — labels come from `nav` in the translation files. */
export const navItems = [
  { id: 'home' },
  { id: 'about' },
  { id: 'skills' },
  { id: 'projects' },
  { id: 'experience' },
  { id: 'contact' },
]
