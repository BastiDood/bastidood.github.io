import { getCollection } from 'astro:content';

import { buildRssFeed, FEED_AUTHOR } from '#features/rss/build-rss-feed.ts';

export async function GET(context: { site: URL }) {
	const series = await getCollection('series');
	series.sort((left, right) => left.data.title.localeCompare(right.data.title));

	return buildRssFeed({
		title: "Basti Ortiz's Article Series",
		description: 'Collections of related articles by Basti Ortiz.',
		site: context.site,
		pagePath: '/series/',
		feedPath: '/series/rss.xml',
		items: series.map(entry => ({
			title: entry.data.title,
			link: `/series/${entry.id}/`,
			author: FEED_AUTHOR,
		})),
	});
}
