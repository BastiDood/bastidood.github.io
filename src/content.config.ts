import { defineCollection, reference } from 'astro:content';

import { glob } from 'astro/loaders';
import { parseISO } from 'date-fns';
import { projectTechnologyIds } from '#technology-catalog/project-technologies.ts';
import { z } from 'astro/zod';

const yearMonthSchema = z
	.string()
	.transform(value => parseISO(value))
	.pipe(z.date());

const series = defineCollection({
	loader: glob({
		base: './src/content/series',
		pattern: '*/index.yaml',
	}),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
	}),
});

const articles = defineCollection({
	loader: glob({
		base: './src/content/articles',
		pattern: '*/index.mdx',
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			createdAt: z.iso.datetime({ precision: 0 }),
			publishedAt: z.iso.datetime({ precision: 0 }),
			updatedAt: z.iso.datetime({ precision: 0 }).optional(),
			cover: z
				.object({
					src: image(),
					alt: z.string(),
				})
				.optional(),
			featured: z.boolean().optional(),
			tags: z.array(z.string()),
			series: reference('series').optional(),
		}),
});

const milestones = defineCollection({
	loader: glob({
		base: './src/content/milestones',
		pattern: '*/index.mdx',
	}),
	schema: z.object({
		date: z.object({
			start: yearMonthSchema,
			end: yearMonthSchema.nullable().optional(),
		}),
		title: z.string(),
		organization: z.object({
			name: z.string(),
			url: z.url(),
		}),
	}),
});

const projects = defineCollection({
	loader: glob({
		base: './src/content/projects',
		pattern: '*/index.mdx',
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			logo: z
				.object({
					src: image(),
					alt: z.string().optional(),
				})
				.optional(),
			technologies: z.array(z.enum(projectTechnologyIds)),
		}),
});

export const collections = { articles, milestones, projects, series };
