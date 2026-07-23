# 01 - ARCHITECTURE & PROJECT SETUP

## 1. Project Initialization Command
Run the following commands to initialize the project with Astro, Tailwind CSS, MDX, and React/Alpine integration:

```bash
# Initialize Astro project
npm create astro@latest portfolio-app -- --template minimal --no-install --no-git
cd portfolio-app

# Add integrations
npx astro add tailwind mdx react sitemap
npm install @astrojs/ts-plugin lucide-react clsx tailwind-merge zod
npm install -D @tailwindcss/typography
```

---

## 2. Directory & Folder Structure
Construct the project directory as follows:

```
portfolio-app/
├── public/
│   ├── favicon.svg
│   ├── fonts/
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── mockups/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.astro
│   │   │   ├── Footer.astro
│   │   │   ├── ThemeToggle.astro
│   │   │   └── Button.astro
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── FeaturedProjects.astro
│   │   │   └── LiveStatus.astro
│   │   ├── projects/
│   │   │   ├── ProjectCard.astro
│   │   │   └── CaseStudyHeader.astro
│   │   └── experience/
│   │       ├── Timeline.astro
│   │       └── TimelineItem.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── experience/
│   │   │   └── work-history.json
│   │   └── projects/
│   │       ├── inventory-system.mdx
│   │       └── central-auth-db.mdx
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── CaseStudyLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── experience.astro
│   │   ├── about.astro
│   │   └── contact.astro
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       └── formatDate.ts
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

---

## 3. Configuration Files

### `astro.config.mjs`
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://namaanda.dev',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    react(),
    sitemap(),
  ],
  prefetch: true,
});
```

### `tsconfig.json`
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@layouts/*": ["src/layouts/*"],
      "@assets/*": ["src/assets/*"],
      "@utils/*": ["src/utils/*"]
    }
  }
}
```