# 02 - DESIGN SYSTEM & STYLING RULES

## 1. Visual Philosophy: Anti-AI Aesthetic
* **Editorial Swiss Graphic Style:** Asymmetric grids, high contrast serif/sans typography, structured layout like modern architectural magazines.
* **Soft Brutalism:** 1px solid crisp borders (`border-color`), hard offset box-shadows (`shadow-[3px_3px_0px_#1A1A18]`), warm off-white tones instead of pure #FFFFFF or #000000.
* **Zero Generic AI Tropes:** NO purple/neon gradients, NO over-rounded pill cards, NO vague buzzwords.

---

## 2. CSS Color Tokens (`src/styles/global.css`)

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

@layer base {
  :root {
    --bg-primary: #FAF8F5;
    --bg-secondary: #F0EDE6;
    --bg-card: #FFFFFF;
    --text-primary: #1A1A18;
    --text-secondary: #5A5A52;
    --text-muted: #8C8C80;
    --border-color: #E2DDD5;
    --accent-terracotta: #C85A32;
    --accent-sage: #2D5A4C;
    --shadow-color: #1A1A18;
  }

  [data-theme="dark"] {
    --bg-primary: #121314;
    --bg-secondary: #1A1C1E;
    --bg-card: #222427;
    --text-primary: #EDEDEB;
    --text-secondary: #A0A098;
    --text-muted: #6C6C64;
    --border-color: #2E3135;
    --accent-terracotta: #E07A5F;
    --accent-sage: #52B788;
    --shadow-color: #000000;
  }

  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: 'Plus Jakarta Sans', sans-serif;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  h1, h2, h3, .font-editorial {
    font-family: 'Playfair Display', 'Newsreader', serif;
  }
}

@layer utilities {
  .border-editorial {
    border: 1px solid var(--border-color);
  }
  .card-tactile {
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    box-shadow: 3px 3px 0px var(--shadow-color);
  }
}
```

---

## 3. Tailwind Configuration (`tailwind.config.mjs`)

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          card: 'var(--bg-card)',
        },
        txt: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        brand: {
          terracotta: 'var(--accent-terracotta)',
          sage: 'var(--accent-sage)',
        },
        borderCustom: 'var(--border-color)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
```