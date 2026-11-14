import { getCollection } from 'astro:content';

import { buildRssFeed, FEED_AUTHOR } from '#features/rss/build-rss-feed.ts';

export async function GET({ site }: { site: URL }) {
	const series = await getCollection('series');
	series.sort(({ data: left }, { data: right }) => left.title.localeCompare(right.title));

	return await buildRssFeed({
		title: "Basti Ortiz's Article Series",
		description: 'Collections of related articles by Basti Ortiz.',
		site,
		pagePath: '/series/',
		feedPath: '/series/rss.xml',
		items: series.map(({ id, data: { title } }) => ({
			title,
			link: `/series/${id}/`,
			author: FEED_AUTHOR,
		})),
	});
}
