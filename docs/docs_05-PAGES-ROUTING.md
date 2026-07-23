# 05 - PAGES & DYNAMIC ROUTING

## 1. Homepage (`src/pages/index.astro`)
Assembly of `Hero`, `LiveStatus`, `FeaturedProjects`, and `ExperienceTeaser`.

```astro
---
import BaseLayout from '@layouts/BaseLayout.astro';
import Hero from '@components/home/Hero.astro';
import ProjectCard from '@components/projects/ProjectCard.astro';
import { getCollection } from 'astro:content';

const featuredProjects = await getCollection('projects', ({ data }) => data.featured);
---

<BaseLayout title="Developer & System Architect Portfolio">
  <main class="max-w-6xl mx-auto px-4 py-12 space-y-16">
    <Hero />
    
    <section>
      <div class="flex justify-between items-baseline mb-8">
        <h2 class="font-serif text-3xl font-bold">Selected Works</h2>
        <a href="/projects" class="text-sm font-mono text-brand-terracotta hover:underline">View All Projects &rarr;</a>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        {featuredProjects.map(project => <ProjectCard project={project} />)}
      </div>
    </section>
  </main>
</BaseLayout>
```

---

## 2. Dynamic Case Study Page (`src/pages/projects/[slug].astro`)

```astro
---
import { getCollection } from 'astro:content';
import CaseStudyLayout from '@layouts/CaseStudyLayout.astro';

export async function getStaticPaths() {
  const projects = await getCollection('projects');
  return projects.map(entry => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}

const { entry } = Astro.props;
const { Content } = await entry.render();
---

<CaseStudyLayout frontmatter={entry.data}>
  <Content />
</CaseStudyLayout>
```