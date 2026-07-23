# 03 - CONTENT COLLECTIONS & DATA SCHEMAS

## 1. Zod Schema Configuration (`src/content/config.ts`)

```typescript
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    coverImage: image(),
    coverAlt: z.string(),
    category: z.enum(['Frontend', 'Fullstack', 'System Architecture', 'Tooling']),
    featured: z.boolean().default(false),
    pubDate: z.date(),
    role: z.string(),
    techStack: z.array(z.string()),
    liveUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    impactMetrics: z.array(z.object({
      label: z.string(),
      value: z.string()
    })).optional()
  })
});

const experienceCollection = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    company: z.string(),
    location: z.string(),
    roles: z.array(z.object({
      title: z.string(),
      startDate: z.string(),
      endDate: z.string().default('Present'),
      type: z.enum(['Full-time', 'Part-time', 'Contract', 'Freelance']),
      description: z.array(z.string()),
      keyAchievements: z.array(z.string()),
      technologies: z.array(z.string())
    }))
  }))
});

export const collections = {
  'projects': projectsCollection,
  'experience': experienceCollection
};
```

---

## 2. Sample Case Study MDX File (`src/content/projects/inventory-system.mdx`)

```mdx
---
title: "Centralized Multi-System Inventory & Role Mapping Architecture"
subtitle: "Harmonizing inventory role definitions and access control across two disparate web systems"
description: "Designed a centralized single sign-on & role mapping strategy to sync permissions across legacy and modern inventory backends."
coverImage: "../../assets/images/inventory-preview.png"
coverAlt: "System Architecture Diagram for Multi-System Inventory"
category: "System Architecture"
featured: true
pubDate: 2026-06-15
role: "Lead System Integrator & Frontend Developer"
techStack: ["Astro", "TypeScript", "Tailwind CSS", "OAuth2 / Google SSO", "PostgreSQL"]
impactMetrics:
  - label: "Sync Accuracy"
    value: "100%"
  - label: "Latency"
    value: "< 45ms"
  - label: "Unified Roles"
    value: "2 Systems"
---

### Executive Summary
When managing inventory across two distinct legacy and modern platforms, maintaining role consistency (e.g., Inventory Auditor, Warehouse Manager, Approver) becomes a bottleneck.

### The Challenge
1. **Role Misalignment:** System A defined granular inventory permissions while System B relied on generic admin flags.
2. **User Experience Friction:** Users had to re-authenticate and switch contexts manually.

### Solution & Technical Architecture
We implemented a **Central Database for Role Mapping** utilizing Google OAuth as the central Identity Provider (IdP).
```