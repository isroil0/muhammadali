# Gayratov Muhammadali — Portfolio

A single-page portfolio built with **React + Vite**, plain **JavaScript**, and hand-written **CSS**.
Dark "cosmic" theme designed around the hero photo.

## Run it

```bash
npm install     # once
npm run dev     # dev server → http://localhost:5173
npm run build   # production build → dist/
npm run preview # preview the production build
```

## Where to edit things

| What you want to change | File |
| --- | --- |
| **Name, email, phone, social links, CV link, photo** | `src/data.js` → `profile` |
| **All visible text, in all 3 languages** | `src/i18n/translations.js` |
| Project years, tech stack, demo/code links | `src/data.js` → `projectMeta` |
| Tech strip under Skills | `src/data.js` → `marqueeItems` |
| Colors, fonts, spacing | `src/styles/global.css` (the `:root` block) |
| Hero photo | replace `public/photo.jpg` |

**Text lives in `src/i18n/translations.js`, everything else in `src/data.js`.**
You can rewrite the whole site without touching a single component.

## Languages

The site ships in **Uzbek, Russian and English**. The UZ / RU / EN switcher sits in the
navbar (and at the bottom of the mobile menu).

- The language is picked from `localStorage` first, then the browser language, then English.
- `<html lang>`, the page `<title>` and the meta description all update on switch.
- To edit copy, open `src/i18n/translations.js` and find the `en`, `ru` or `uz` block —
  all three have exactly the same shape, so edit the one you need.
- To add a fourth language: copy a whole block, translate the values, and add an entry to
  the `languages` array at the top of the same file. Nothing else needs changing.

> Keep the arrays the same length across languages (`hero.roles`, `skills.groups`,
> `projects.items`, `experience.items`) — they line up positionally with `src/data.js`.

### Things to fill in before publishing
- `profile.resumeUrl` — currently `#`
- `profile.socials` — GitHub / LinkedIn / Telegram URLs are base URLs, add your usernames
- `projects[].demo` and `projects[].code` — currently `#`
- Project and timeline content is realistic placeholder text — swap in your real work

## Structure

```
index.html              page shell, fonts, meta tags
public/photo.jpg        hero photo (optimized, 112 KB)
src/
  main.jsx              entry point, imports all CSS
  App.jsx               page composition
  data.js               non-text data (profile, links, tech stacks)
  i18n/
    translations.js     ← all site copy, in uz / ru / en
    LanguageProvider.jsx  language context + detection + persistence
  components/           Navbar, Hero, About, Skills, Projects, Experience,
                        Contact, Footer, Background, Icons, LangSwitcher, RichText
  hooks/
    useReveal.js        scroll-into-view animations
    useScrollSpy.js     highlights the active nav link
    useTypewriter.js    typing effect for the hero role
  styles/               global, background, nav, hero, sections
```

## Deploy

The build is fully static. `npm run build`, then drop the `dist/` folder on
Netlify, Vercel, or GitHub Pages — no server needed.
