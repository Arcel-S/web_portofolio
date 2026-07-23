# Project Agent Rules: Web Portfolio (Astro + Editorial Swiss Style)

These rules provide project-specific guardrails and instructions for any AI agent working on this codebase.

---

## 1. Project Architecture & Tech Stack
- **Framework:** Astro v4+ (Static Site Generation / SSG by default).
- **Styling:** Vanilla CSS + Tailwind CSS (Soft Brutalism + Editorial Swiss Graphic style).
- **Content:** MDX case studies & JSON data models validated via `astro:content` (Zod schemas in `src/content/config.ts`).
- **Icons & UI:** `lucide-react`, React components used strictly as interactive Islands (`client:*`).

---

## 2. Visual & Design System Principles (Anti-AI Aesthetic)
- **Colors:** Warm off-whites (`#FAF8F5`), Terracotta accent (`#C85A32`), Sage green (`#2D5A4C`). Avoid pure `#FFFFFF` or `#000000`.
- **Borders & Shadows:** Use 1px solid borders (`var(--border-color)`) with hard offset box-shadows (`shadow-[3px_3px_0px_#1A1A18]`).
- **Typography:** Serif headings (`Playfair Display`), Sans-serif body (`Plus Jakarta Sans`), Monospace accents (`JetBrains Mono`).
- **Strict Prohibition:** NO generic purple/neon gradients, NO overly rounded pill buttons/cards, NO meaningless buzzwords.

---

## 3. Astro Best Practices & Code Conventions
1. **Zero JS Default:** Always prefer `.astro` static components. Only use React/Framework components when client-side interactivity is required.
2. **Selective Hydration:**
   - Use `client:load` ONLY for critical interactive elements above the fold (e.g. `Navbar` theme toggle).
   - Use `client:visible` for elements below the fold (e.g. video players, interactive widgets).
   - Never place `client:load` on static components.
3. **Path Aliases:** Always use absolute path aliases:
   - `@components/*` -> `src/components/*`
   - `@layouts/*` -> `src/layouts/*`
   - `@styles/*` -> `src/styles/*`
   - `@assets/*` -> `src/assets/*`
   - `@utils/*` -> `src/utils/*`
4. **View Transitions:** Keep `<ViewTransitions />` in `src/layouts/BaseLayout.astro` to ensure smooth SPA-like navigation across static pages.

---

## 4. Verification Workflow
- Before marking any task as complete, verify TypeScript types and Astro compilation using:
  ```bash
  npx astro check
  npx astro build
  ```
