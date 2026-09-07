import { getCollection } from 'astro:content';

import rss from '@astrojs/rss';

export async function GET(context: { site: URL }) {
	const series = await getCollection('series');
	series.sort((left, right) => left.data.title.localeCompare(right.data.title));

	return rss({
		title: "Basti Ortiz's Article Series",
		description: 'Collections of related articles by Basti Ortiz.',
		site: context.site,
		items: series.map(entry => ({
			title: entry.data.title,
			link: `/series/${entry.id}/`,
		})),
	});
}
