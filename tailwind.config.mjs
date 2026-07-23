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

        // Extended theme colors from provided HTML
        "ink-black": "#1A1A18",
        "ink-gray": "#5A5A52",
        "ink-slate": "#A0A098",
        "ink-white": "#EDEDEB",
        "ink-border-light": "#E2DDD5",
        "ink-border-dark": "#2E3135",
        "surface-cream": "#FAF8F5",
        "surface-cream-dim": "#F0EDE6",
        "surface-charcoal": "#121314",
        "surface-card-light": "#FFFFFF",
        "surface-card-dark": "#222427",
        "surface-container-low": "#f5f3f0",
        "accent-sage-dark": "#52B788",
        "accent-terracotta-dark": "#E07A5F",
        "primary": "#9f3c16",
        "inverse-primary": "#ffb59c"
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        "display-lg": ['"Playfair Display"', 'serif'],
        "display-lg-mobile": ['"Playfair Display"', 'serif'],
        "headline-lg": ['"Playfair Display"', 'serif'],
        "headline-md": ['"Playfair Display"', 'serif'],
        "body-lg": ['"Plus Jakarta Sans"', 'sans-serif'],
        "body-md": ['"Plus Jakarta Sans"', 'sans-serif'],
        "label-md": ['"JetBrains Mono"', 'monospace'],
        "label-sm": ['"JetBrains Mono"', 'monospace'],
      },
      spacing: {
        "section-gap": "5rem",
        "stack-sm": "0.5rem",
        "stack-md": "1rem",
        "stack-lg": "2rem",
        "grid-margin": "2rem",
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
