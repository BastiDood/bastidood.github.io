import { getEntries } from 'astro:content';

import rss from '@astrojs/rss';
import { projectOrder } from '#features/portfolio/project-order.ts';

export async function GET(context: { site: URL }) {
	const projects = await getEntries(projectOrder);

	return rss({
		title: "Basti Ortiz's Portfolio",
		description: 'Selected software, systems, and open-source projects by Basti Ortiz.',
		site: context.site,
		items: projects.map(project => ({
			title: project.data.title,
			description: project.data.description,
			link: new URL(`/portfolio/#${project.id}`, context.site).href,
		})),
	});
}
