import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
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
      keyAchievements: z.array(z.string()).optional(),
      technologies: z.array(z.string())
    }))
  }))
});

export const collections = {
  'projects': projectsCollection,
  'experience': experienceCollection
};
