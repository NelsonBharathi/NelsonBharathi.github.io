import { defineCollection, z } from "astro:content";

const profile = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    title: z.string().optional(),
    affiliation: z.string().optional(),
    location: z.string().optional(),
    email: z.string().optional(),
    bio: z.string().optional(),
    avatar: z.string().optional(), // /uploads/...
    github_username: z.string().optional(),
    google_scholar_url: z.string().optional(),
    orcid_url: z.string().optional(),
    website_url: z.string().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        }),
      )
      .optional(),
  }),
});

const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number(),
    venue: z.string().optional(),
    authors: z.string().optional(),
    abstract: z.string().optional(),
    paper_pdf: z.string().optional(), // /uploads/file.pdf
    slides_pdf: z.string().optional(),
    url: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const teaching = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    term: z.string().optional(),
    institution: z.string().optional(),
    description: z.string().optional(),
    materials: z
      .array(
        z.object({
          label: z.string(),
          file: z.string().optional(), // /uploads/...
          url: z.string().url().optional(),
        }),
      )
      .optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    role: z.string().optional(),
    description: z.string().optional(),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    attachments: z
      .array(
        z.object({
          label: z.string(),
          file: z.string().optional(),
          url: z.string().url().optional(),
        }),
      )
      .optional(),
  }),
});

const studentProjects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    student_names: z.string().optional(),
    year: z.number().optional(),
    description: z.string().optional(),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    attachments: z
      .array(
        z.object({
          label: z.string(),
          file: z.string().optional(),
          url: z.string().url().optional(),
        }),
      )
      .optional(),
  }),
});

export const collections = {
  profile,
  publications,
  teaching,
  projects,
  "student-projects": studentProjects,
};
