# 04 - COMPONENT SPECIFICATIONS & CODE

## 1. Global Navbar (`src/components/common/Navbar.astro`)

```astro
---
import ThemeToggle from './ThemeToggle.astro';
---
<header class="sticky top-0 z-50 bg-bg-primary/90 backdrop-blur-md border-b border-borderCustom">
  <nav class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
    <a href="/" class="font-serif text-xl font-bold tracking-tight text-txt-primary flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-brand-terracotta inline-block"></span>
      NAMA.DEV
    </a>
    
    <div class="flex items-center gap-6 text-sm font-medium">
      <a href="/projects" class="hover:text-brand-terracotta transition-colors">Projects</a>
      <a href="/experience" class="hover:text-brand-terracotta transition-colors">Experience</a>
      <a href="/about" class="hover:text-brand-terracotta transition-colors">About</a>
      <a href="/contact" class="hover:text-brand-terracotta transition-colors">Contact</a>
      <ThemeToggle />
    </div>
  </nav>
</header>
```

---

## 2. Theme Toggle (`src/components/common/ThemeToggle.astro`)

```astro
<button id="theme-toggle" class="p-2 rounded border border-borderCustom hover:bg-bg-secondary text-xs font-mono">
  <span id="theme-text">TOGGLE MODE</span>
</button>

<script>
  const toggle = document.getElementById('theme-toggle');
  const getTheme = () => localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  const setTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  setTheme(getTheme());

  toggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
</script>
```

---

## 3. Project Card (`src/components/projects/ProjectCard.astro`)

```astro
---
import { Image } from 'astro:assets';
const { project } = Astro.props;
---
<article class="card-tactile p-5 rounded flex flex-col justify-between group hover:-translate-y-1 transition-transform">
  <div>
    <div class="overflow-hidden border border-borderCustom rounded mb-4">
      <Image src={project.data.coverImage} alt={project.data.coverAlt} class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <span class="text-xs font-mono text-brand-sage uppercase tracking-wider">{project.data.category}</span>
    <h3 class="font-serif text-xl font-bold mt-1 text-txt-primary">{project.data.title}</h3>
    <p class="text-sm text-txt-secondary mt-2 line-clamp-2">{project.data.description}</p>
  </div>

  <div class="mt-6 pt-4 border-t border-borderCustom flex items-center justify-between">
    <div class="flex gap-1.5 flex-wrap">
      {project.data.techStack.slice(0, 3).map((tech: string) => (
        <span class="text-[10px] font-mono px-2 py-0.5 bg-bg-secondary border border-borderCustom rounded">{tech}</span>
      ))}
    </div>
    <a href={`/projects/${project.slug}`} class="text-xs font-bold text-brand-terracotta group-hover:underline">Read &rarr;</a>
  </div>
</article>
```