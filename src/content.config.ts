import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

// Lessons collection
const lessonsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/lessons" }),
  schema: z.object({
    title: z.string(),
    module: z.string(),
    lesson: z.string(),
    objectives: z.array(z.string()).default([]),
    summary: z.string().optional(),
    aqfOutcomeRefs: z.array(z.string()).default([]),
    next: z.string().optional(),
  }),
});

// Assessments collection
const assessmentsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/assessments" }),
  schema: z.object({
    title: z.string(),
    module: z.string(),
    type: z.enum(["checkin", "capstone"]).default("checkin"),
    aqfOutcomeRefs: z.array(z.string()).default([]),
  }),
});

// Modules collection (course structure + metadata)
const modulesCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/modules" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    summary: z.string().optional(),
    tint: z.string().default("style01"),
  }),
});

// Curriculum pages (course outline, etc.)
const curriculumCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/curriculum" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

// Reference pages (AQF descriptor, etc.)
const referenceCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/reference" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

// Export collections
export const collections = {
  lessons: lessonsCollection,
  assessments: assessmentsCollection,
  modules: modulesCollection,
  curriculum: curriculumCollection,
  reference: referenceCollection,
};
