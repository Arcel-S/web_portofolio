# 🚀 PORTFOLIO DEVELOPMENT MASTER PROMPT KIT FOR AI
**Target Stack:** Astro v4+ (SSG) + Tailwind CSS + TypeScript + MDX  
**Visual Style:** Editorial Swiss Graphic Style + Soft Brutalism (Anti-AI Aesthetic)  
**Primary Goal:** Build a high-performance, human-crafted developer portfolio.

---

## 📌 OVERVIEW FOR AI CODING ASSISTANT
You are an expert Senior Frontend Engineer and UI/UX Designer tasked with building a personal portfolio website from scratch. Follow all instructions across the modular documentation files strictly.

### 📜 Documentation Structure
Send these files sequentially or as context to your AI coding agent (Cursor, Claude Code, ChatGPT, GitHub Copilot):

1. [docs/01-ARCHITECTURE-SETUP.md](docs/01-ARCHITECTURE-SETUP.md)  
   *Project setup, directory tree, dependencies, and configuration files (`astro.config.mjs`, `tsconfig.json`).*
2. [docs/02-DESIGN-SYSTEM.md](docs/02-DESIGN-SYSTEM.md)  
   *Tailwind CSS config, color variables, typography rules, dark mode setup, and anti-AI visual guidelines.*
3. [docs/03-CONTENT-COLLECTIONS.md](docs/03-CONTENT-COLLECTIONS.md)  
   *Zod schemas (`src/content/config.ts`), MDX structure for case studies, and JSON data structure for experience.*
4. [docs/04-COMPONENTS-SPEC.md](docs/04-COMPONENTS-SPEC.md)  
   *Detailed specs and code for UI components (`Navbar`, `Hero`, `ProjectCard`, `TimelineCard`, `ThemeToggle`, etc.).*
5. [docs/05-PAGES-ROUTING.md](docs/05-PAGES-ROUTING.md)  
   *Implementation details for `/`, `/projects`, `/projects/[slug]`, `/experience`, `/about`, and `/contact`.*

---

## ⚡ QUICK START INSTRUCTIONS FOR AI
When prompting your coding AI:
1. First, tell the AI: *"Read `01-ARCHITECTURE-SETUP.md` and initialize the Astro project structure with all required dependencies."*
2. Next: *"Implement the design tokens and global CSS according to `02-DESIGN-SYSTEM.md`."*
3. Next: *"Configure Content Collections in `src/content/config.ts` using `03-CONTENT-COLLECTIONS.md`."*
4. Next: *"Create all UI components according to `04-COMPONENTS-SPEC.md`."*
5. Finally: *"Assemble all pages and dynamic routes using `05-PAGES-ROUTING.md`."*