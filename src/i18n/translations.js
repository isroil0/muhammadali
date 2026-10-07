/* ------------------------------------------------------------------
   All translatable copy, keyed by language.
   Add a language by copying one block and translating the values.
   Tech names (React, Vite, Figma...) stay in src/data.js — they are
   the same in every language.
   ------------------------------------------------------------------ */

export const languages = [
  { code: "uz", label: "UZ", name: "Oʻzbekcha", htmlLang: "uz" },
  { code: "ru", label: "RU", name: "Русский", htmlLang: "ru" },
  { code: "en", label: "EN", name: "English", htmlLang: "en" },
]

export const translations = {
  /* ============================= ENGLISH ============================= */
  en: {
    meta: {
      title: "Gayratov Muhammadali — Frontend Developer",
      description:
        "Gayratov Muhammadali — Frontend Developer building fast, accessible and beautiful web interfaces with React.",
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      hire: "Hire me",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      language: "Language",
    },
    hero: {
      availability: "Available for work",
      greeting: "Hi, I’m",
      roles: [
        "Frontend Developer",
        "React Engineer",
        "UI / UX Enthusiast",
        "JavaScript Developer",
      ],
      tagline:
        "I build fast, accessible and genuinely nice-looking web interfaces — turning designs into smooth, responsive products with React and modern JavaScript.",
      viewWork: "View my work",
      downloadCv: "Download CV",
      openToWork: "Open to work",
      chipYears: "years exp.",
      chipProjects: "projects",
      scroll: "Scroll",
    },
    about: {
      eyebrow: "About me",
      title: "A developer who cares about",
      titleAccent: "the details",
      p1: "I’m **{name}**, a frontend developer based in Tashkent, Uzbekistan. I build web interfaces with **React** and modern JavaScript — the kind that load fast, work on every screen, and feel good to use.",
      p2: "My work usually starts in Figma and ends in production: I translate designs into clean, reusable components, wire them up to real APIs, and obsess a little over spacing, motion and accessibility along the way.",
      p3: "Right now I’m looking for a team where I can keep growing — but I’m just as happy taking on focused freelance builds. If you have something in mind, **let’s talk**.",
      facts: [
        { label: "Location", value: "Tashkent, Uzbekistan" },
        { label: "Experience", value: "2+ years" },
        { label: "Focus", value: "React / Frontend" },
        { label: "Languages", value: "Oʻzbek · Русский · English" },
      ],
      stats: [
        { value: "2+", label: "Years writing JavaScript & React" },
        { value: "20+", label: "Interfaces designed and shipped" },
        { value: "100%", label: "Responsive, accessible by default" },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "The tools I",
      titleAccent: "build with",
      subtitle:
        "A practical stack — the things I reach for daily, not a list of everything I’ve ever opened.",
      groups: [
        {
          title: "Core Frontend",
          note: "The everyday toolkit",
          tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Responsive Design", "Accessibility"],
        },
        {
          title: "React Ecosystem",
          note: "Where I spend most of my time",
          tags: ["React", "Hooks", "React Router", "Redux Toolkit", "Next.js", "Vite"],
        },
        {
          title: "Styling & UI",
          note: "Making it look right",
          tags: ["Tailwind CSS", "SCSS", "CSS Modules", "Framer Motion", "Figma", "Design Systems"],
        },
        {
          title: "Tooling & Workflow",
          note: "How the work gets shipped",
          tags: ["Git & GitHub", "REST APIs", "Firebase", "Node.js basics", "Netlify / Vercel", "Jest"],
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Things I’ve",
      titleAccent: "designed & shipped",
      subtitle:
        "A selection of builds that show how I think about structure, state and interface detail.",
      liveDemo: "Live demo",
      sourceCode: "Source code",
      visitSite: "Visit website",
      items: [
        {
          title: "Oceanic York — Aqua Salon",
          description:
            "Website for an aquarium salon in Tashkent: a catalogue of marine and freshwater fish, aquariums and maintenance services, with a photo gallery and one-tap contact links. Built mobile-first, since nearly every customer arrives from Telegram or Instagram on a phone.",
        },
        {
          title: "Troya — Gym CRM",
          description:
            "Management system for a gym: members and membership plans with freeze, extend and expiry handling, QR-card check-in, attendance tracking, coach assignment, payments, and a reporting dashboard with exportable revenue statistics. Role-based access for admins and staff.",
        },
        {
          title: "Ismoil — Warehouse CRM",
          description:
            "Stock system for a warehouse and its shop: products with price history, stock-in, sales, manual corrections and transfers between locations, all in one movement log. Cost price is tracked so profit shows per item, alongside customer accounts and outstanding debt. Role-based access, with a super admin who sees every location.",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Where I’ve",
      titleAccent: "been working",
      subtitle: "Learning in public, shipping in production — here’s the short version.",
      items: [
        {
          period: "2024 — Now",
          title: "Frontend Developer",
          org: "Freelance / Remote",
          text: "Building production React interfaces for clients — landing pages, dashboards and e-commerce fronts. Own the work end to end, from Figma handoff to deployment.",
        },
        {
          period: "2024 — Now",
          title: "Computer Science Student",
          org: "Inha University in Tashkent",
          text: "Studying for a bachelor’s degree alongside client work. Algorithms, data structures and software engineering give the practical side a proper foundation.",
        },
        {
          period: "2023 — 2024",
          title: "Junior Frontend Developer",
          org: "Web Studio",
          text: "Shipped responsive marketing sites and internal tools. Translated designs into pixel-accurate components and cut page load time on the main product by a third.",
        },
        {
          period: "2023",
          title: "Frontend Development Course",
          org: "IT Academy",
          text: "Intensive training in HTML, CSS, JavaScript and React. Graduated with a full-stack capstone project and a portfolio of eight shipped builds.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Have a project in mind?",
      titleAccent: "Let’s build it.",
      text: "I’m open to full-time roles and freelance work. Send a message and I’ll usually get back to you within a day.",
      button: "Send me an email",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Tashkent, Uzbekistan",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with React & CSS.",
      backToTop: "Back to top",
    },
  },

  /* ============================= RUSSIAN ============================= */
  ru: {
    meta: {
      title: "Gayratov Muhammadali — Frontend-разработчик",
      description:
        "Gayratov Muhammadali — frontend-разработчик, создаю быстрые, доступные и красивые веб-интерфейсы на React.",
    },
    nav: {
      home: "Главная",
      about: "Обо мне",
      skills: "Навыки",
      projects: "Проекты",
      experience: "Опыт",
      contact: "Контакты",
      hire: "Нанять меня",
      menuOpen: "Открыть меню",
      menuClose: "Закрыть меню",
      language: "Язык",
    },
    hero: {
      availability: "Открыт для работы",
      greeting: "Привет, я",
      roles: [
        "Frontend-разработчик",
        "React-инженер",
        "UI / UX энтузиаст",
        "JavaScript-разработчик",
      ],
      tagline:
        "Создаю быстрые, доступные и по-настоящему красивые веб-интерфейсы — превращаю дизайн в плавные адаптивные продукты на React и современном JavaScript.",
      viewWork: "Мои работы",
      downloadCv: "Скачать резюме",
      openToWork: "Открыт для работы",
      chipYears: "года опыта",
      chipProjects: "проектов",
      scroll: "Листайте",
    },
    about: {
      eyebrow: "Обо мне",
      title: "Разработчик, который думает о",
      titleAccent: "деталях",
      p1: "Я **{name}**, frontend-разработчик из Ташкента. Создаю веб-интерфейсы на **React** и современном JavaScript — такие, которые быстро загружаются, работают на любом экране и приятны в использовании.",
      p2: "Моя работа обычно начинается в Figma и заканчивается в продакшене: я превращаю макеты в чистые переиспользуемые компоненты, подключаю их к реальным API и внимательно отношусь к отступам, анимации и доступности.",
      p3: "Сейчас ищу команду, где смогу расти дальше, но с удовольствием берусь и за фриланс-проекты. Если у вас есть идея — **давайте обсудим**.",
      facts: [
        { label: "Город", value: "Ташкент, Узбекистан" },
        { label: "Опыт", value: "2+ года" },
        { label: "Направление", value: "React / Frontend" },
        { label: "Языки", value: "Oʻzbek · Русский · English" },
      ],
      stats: [
        { value: "2+", label: "года пишу на JavaScript и React" },
        { value: "20+", label: "интерфейсов спроектировано и запущено" },
        { value: "100%", label: "адаптивность и доступность по умолчанию" },
      ],
    },
    skills: {
      eyebrow: "Навыки",
      title: "Инструменты, с которыми я",
      titleAccent: "работаю",
      subtitle:
        "Практичный стек — то, чем пользуюсь каждый день, а не список всего, что когда-либо открывал.",
      groups: [
        {
          title: "Основы фронтенда",
          note: "Ежедневный инструментарий",
          tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Адаптивная вёрстка", "Доступность"],
        },
        {
          title: "Экосистема React",
          note: "Здесь провожу больше всего времени",
          tags: ["React", "Hooks", "React Router", "Redux Toolkit", "Next.js", "Vite"],
        },
        {
          title: "Стилизация и UI",
          note: "Чтобы выглядело как надо",
          tags: ["Tailwind CSS", "SCSS", "CSS Modules", "Framer Motion", "Figma", "Дизайн-системы"],
        },
        {
          title: "Инструменты и процесс",
          note: "Как работа доходит до продакшена",
          tags: ["Git и GitHub", "REST API", "Firebase", "Основы Node.js", "Netlify / Vercel", "Jest"],
        },
      ],
    },
    projects: {
      eyebrow: "Проекты",
      title: "То, что я",
      titleAccent: "спроектировал и запустил",
      subtitle:
        "Подборка работ, которая показывает, как я думаю о структуре, состоянии и деталях интерфейса.",
      liveDemo: "Демо",
      sourceCode: "Исходный код",
      visitSite: "Открыть сайт",
      items: [
        {
          title: "Oceanic York — аква-салон",
          description:
            "Сайт для аквариумного салона в Ташкенте: каталог морских и пресноводных рыб, аквариумов и услуг по обслуживанию, фотогалерея и контакты в одно касание. Сделан mobile-first — почти все клиенты приходят из Telegram и Instagram с телефона.",
        },
        {
          title: "Troya — CRM для фитнес-клуба",
          description:
            "Система управления спортзалом: клиенты и абонементы с заморозкой, продлением и контролем срока, вход по QR-карте, учёт посещаемости, закрепление тренеров, платежи и дашборд отчётов с выгрузкой статистики по выручке. Ролевой доступ для администраторов и персонала.",
        },
        {
          title: "Ismoil — CRM для склада",
          description:
            "Система учёта для склада и магазина: товары с историей цен, приход, продажи, ручные корректировки и перемещения между точками — всё в одном журнале движений. Учитывается себестоимость, поэтому видна прибыль по каждой позиции, а также клиенты и их задолженность. Ролевой доступ: супер-админ видит все точки.",
        },
      ],
    },
    experience: {
      eyebrow: "Опыт",
      title: "Где я",
      titleAccent: "работал",
      subtitle: "Учусь открыто, выкладываю в продакшен — вот краткая версия.",
      items: [
        {
          period: "2024 — сейчас",
          title: "Frontend-разработчик",
          org: "Фриланс / Удалённо",
          text: "Делаю продакшен-интерфейсы на React для клиентов — лендинги, дашборды и витрины магазинов. Веду проект целиком: от макета в Figma до деплоя.",
        },
        {
          period: "2024 — сейчас",
          title: "Студент, компьютерные науки",
          org: "Университет Инха в Ташкенте",
          text: "Учусь на бакалавриате параллельно с работой над клиентскими проектами. Алгоритмы, структуры данных и программная инженерия дают прочную базу под практику.",
        },
        {
          period: "2023 — 2024",
          title: "Junior Frontend-разработчик",
          org: "Веб-студия",
          text: "Выпускал адаптивные сайты и внутренние инструменты. Переводил макеты в пиксель-точные компоненты и сократил время загрузки основного продукта на треть.",
        },
        {
          period: "2023",
          title: "Курс Frontend-разработки",
          org: "IT Academy",
          text: "Интенсив по HTML, CSS, JavaScript и React. Выпустился с дипломным full-stack проектом и портфолио из восьми готовых работ.",
        },
      ],
    },
    contact: {
      eyebrow: "Контакты",
      title: "Есть проект на примете?",
      titleAccent: "Давайте сделаем.",
      text: "Открыт для работы в штате и для фриланса. Напишите — обычно отвечаю в течение дня.",
      button: "Написать мне",
      email: "Почта",
      phone: "Телефон",
      location: "Город",
      locationValue: "Ташкент, Узбекистан",
    },
    footer: {
      rights: "Все права защищены.",
      built: "Сделано на React и CSS.",
      backToTop: "Наверх",
    },
  },

  /* ============================== UZBEK ============================== */
  uz: {
    meta: {
      title: "Gayratov Muhammadali — Frontend dasturchi",
      description:
        "Gayratov Muhammadali — React yordamida tez, qulay va chiroyli veb-interfeyslar yaratuvchi frontend dasturchi.",
    },
    nav: {
      home: "Bosh sahifa",
      about: "Men haqimda",
      skills: "Koʻnikmalar",
      projects: "Loyihalar",
      experience: "Tajriba",
      contact: "Aloqa",
      hire: "Ishga taklif",
      menuOpen: "Menyuni ochish",
      menuClose: "Menyuni yopish",
      language: "Til",
    },
    hero: {
      availability: "Ish uchun ochiqman",
      greeting: "Salom, men",
      roles: [
        "Frontend dasturchi",
        "React muhandisi",
        "UI / UX ishqibozi",
        "JavaScript dasturchi",
      ],
      tagline:
        "Men tez ishlaydigan, qulay va chindan ham chiroyli veb-interfeyslar yarataman — dizaynlarni React va zamonaviy JavaScript yordamida silliq, moslashuvchan mahsulotga aylantiraman.",
      viewWork: "Ishlarimni koʻrish",
      downloadCv: "CV yuklab olish",
      openToWork: "Ish qidiryapman",
      chipYears: "yil tajriba",
      chipProjects: "loyiha",
      scroll: "Pastga",
    },
    about: {
      eyebrow: "Men haqimda",
      title: "Tafsilotlarga eʼtibor beradigan",
      titleAccent: "dasturchi",
      p1: "Men **{name}**, Toshkentda yashovchi frontend dasturchiman. **React** va zamonaviy JavaScript yordamida veb-interfeyslar yarataman — tez yuklanadigan, har qanday ekranda ishlaydigan va foydalanish yoqimli boʻlgan interfeyslar.",
      p2: "Ishim odatda Figmadan boshlanib, produksiyada yakunlanadi: dizaynlarni toza va qayta ishlatiladigan komponentlarga aylantiraman, ularni haqiqiy API bilan bogʻlayman hamda masofa, animatsiya va qulaylikka alohida eʼtibor qarataman.",
      p3: "Hozir oʻsishda davom eta oladigan jamoa qidiryapman, shu bilan birga frilans loyihalarni ham mamnuniyat bilan olaman. Agar gʻoyangiz boʻlsa — **keling, gaplashamiz**.",
      facts: [
        { label: "Manzil", value: "Toshkent, Oʻzbekiston" },
        { label: "Tajriba", value: "2+ yil" },
        { label: "Yoʻnalish", value: "React / Frontend" },
        { label: "Tillar", value: "Oʻzbek · Русский · English" },
      ],
      stats: [
        { value: "2+", label: "yil JavaScript va React bilan ishlayman" },
        { value: "20+", label: "interfeys loyihalandi va ishga tushirildi" },
        { value: "100%", label: "moslashuvchan va qulay — standart holatda" },
      ],
    },
    skills: {
      eyebrow: "Koʻnikmalar",
      title: "Men ishlatadigan",
      titleAccent: "vositalar",
      subtitle:
        "Amaliy stek — har kuni foydalanadigan narsalarim, men koʻrgan hamma texnologiyalar roʻyxati emas.",
      groups: [
        {
          title: "Frontend asoslari",
          note: "Kundalik vositalar",
          tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Moslashuvchan dizayn", "Qulaylik (a11y)"],
        },
        {
          title: "React ekotizimi",
          note: "Koʻp vaqtimni shu yerda oʻtkazaman",
          tags: ["React", "Hooks", "React Router", "Redux Toolkit", "Next.js", "Vite"],
        },
        {
          title: "Dizayn va UI",
          note: "Koʻrinishi joyida boʻlishi uchun",
          tags: ["Tailwind CSS", "SCSS", "CSS Modules", "Framer Motion", "Figma", "Dizayn tizimlari"],
        },
        {
          title: "Vositalar va jarayon",
          note: "Ish qanday yetkazib beriladi",
          tags: ["Git va GitHub", "REST API", "Firebase", "Node.js asoslari", "Netlify / Vercel", "Jest"],
        },
      ],
    },
    projects: {
      eyebrow: "Loyihalar",
      title: "Men yaratgan va",
      titleAccent: "ishga tushirgan ishlar",
      subtitle:
        "Tuzilma, holat va interfeys tafsilotlari haqida qanday fikrlashimni koʻrsatadigan ishlar toʻplami.",
      liveDemo: "Jonli demo",
      sourceCode: "Manba kodi",
      visitSite: "Saytni ochish",
      items: [
        {
          title: "Oceanic York — akva salon",
          description:
            "Toshkentdagi akvarium saloni uchun sayt: dengiz va chuchuk suv baliqlari, akvariumlar hamda xizmatlar katalogi, foto galereya va bir bosishda bogʻlanish havolalari. Mijozlarning deyarli barchasi Telegram va Instagramdan telefon orqali kirgani uchun mobile-first qilingan.",
        },
        {
          title: "Troya — sport zali uchun CRM",
          description:
            "Sport zali uchun boshqaruv tizimi: mijozlar va abonementlar (muzlatish, uzaytirish, muddat nazorati), QR karta orqali kirish, davomat hisobi, murabbiy biriktirish, toʻlovlar hamda daromad statistikasini eksport qilish mumkin boʻlgan hisobotlar paneli. Admin va xodimlar uchun rolga asoslangan kirish.",
        },
        {
          title: "Ismoil — ombor uchun CRM",
          description:
            "Ombor va doʻkon uchun hisob tizimi: narx tarixi bilan mahsulotlar, kirim, sotuv, qoʻlda tuzatishlar va nuqtalar oʻrtasida koʻchirish — barchasi yagona harakatlar jurnalida. Kassa narxi (tannarx) asosida har bir mahsulot boʻyicha foyda koʻrinadi, mijozlar va ularning qarzi yuritiladi. Rolga asoslangan kirish: super admin hamma joyni koʻradi.",
        },
      ],
    },
    experience: {
      eyebrow: "Tajriba",
      title: "Men qayerda",
      titleAccent: "ishlaganman",
      subtitle: "Ochiq oʻrganaman, produksiyaga chiqaraman — qisqacha tarix.",
      items: [
        {
          period: "2024 — hozir",
          title: "Frontend dasturchi",
          org: "Frilans / Masofaviy",
          text: "Mijozlar uchun React asosidagi produksiya interfeyslarini yarataman — lending sahifalar, dashbordlar va onlayn doʻkonlar. Loyihani Figmadagi maketdan deploygacha oʻzim olib boraman.",
        },
        {
          period: "2024 — hozir",
          title: "Talaba, kompyuter fanlari",
          org: "Toshkentdagi Inha universiteti",
          text: "Mijoz loyihalari bilan birga bakalavr bosqichida oʻqiyapman. Algoritmlar, maʼlumotlar tuzilmalari va dasturiy injiniring amaliyotga mustahkam poydevor beradi.",
        },
        {
          period: "2023 — 2024",
          title: "Junior frontend dasturchi",
          org: "Veb-studiya",
          text: "Moslashuvchan marketing saytlari va ichki vositalarni ishga tushirdim. Maketlarni piksel aniqlikdagi komponentlarga aylantirdim va asosiy mahsulot yuklanish vaqtini uchdan biriga qisqartirdim.",
        },
        {
          period: "2023",
          title: "Frontend dasturlash kursi",
          org: "IT Academy",
          text: "HTML, CSS, JavaScript va React boʻyicha intensiv taʼlim. Yakuniy full-stack loyiha va sakkizta tayyor ish portfoliosi bilan bitirdim.",
        },
      ],
    },
    contact: {
      eyebrow: "Aloqa",
      title: "Loyihangiz bormi?",
      titleAccent: "Keling, birga qilamiz.",
      text: "Doimiy ish va frilans takliflariga ochiqman. Xabar yozing — odatda bir kun ichida javob beraman.",
      button: "Menga xat yuborish",
      email: "Elektron pochta",
      phone: "Telefon",
      location: "Manzil",
      locationValue: "Toshkent, Oʻzbekiston",
    },
    footer: {
      rights: "Barcha huquqlar himoyalangan.",
      built: "React va CSS yordamida yaratilgan.",
      backToTop: "Yuqoriga",
    },
  },
}
