import { getEntries } from 'astro:content';

import rss from '@astrojs/rss';
import { milestoneOrder } from '#features/home/milestone-order.ts';

export async function GET(context: { site: URL }) {
	const milestones = await getEntries(milestoneOrder);
	return rss({
		title: "Basti Ortiz's Milestones",
		description: "Basti Ortiz's career, education, talks, and other professional milestones.",
		site: context.site,
		items: milestones.map(milestone => ({
			title: milestone.data.title,
			description: milestone.data.organization.name,
			link: new URL(`/#${milestone.id}`, context.site).href,
		})),
	});
}
