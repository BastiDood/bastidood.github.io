import { getCollection } from 'astro:content';

import { buildImageMediaData } from '#features/rss/build-image-media-data.ts';
import { buildRssFeed, FEED_AUTHOR } from '#features/rss/build-rss-feed.ts';

export async function GET({ site }: { site: URL }) {
	const articles = await getCollection('articles');
	articles.sort(
		({ data: left }, { data: right }) =>
			right.publishedAt.getTime() - left.publishedAt.getTime(),
	);

	let lastBuildDate: Date | undefined;
	for (const { data } of articles) {
		const changedAt = data.updatedAt ?? data.publishedAt;
		if (typeof lastBuildDate === 'undefined' || changedAt > lastBuildDate) {
			lastBuildDate = changedAt;
		}
	}

	return await buildRssFeed({
		title: "Basti Ortiz's Articles",
		description:
			'Articles about software engineering, programming languages, and building dependable systems.',
		site,
		pagePath: '/articles/',
		feedPath: '/articles/rss.xml',
		lastBuildDate,
		xmlns: { media: 'http://search.yahoo.com/mrss/' },
		items: articles.map(({ id, data }) => {
			const link = `/articles/${id}/`;
			let customData: string | undefined;
			if (typeof data.cover !== 'undefined') {
				customData = buildImageMediaData(data.cover, new URL(link, site));
			}
			return {
				title: data.title,
				description: data.description,
				pubDate: data.publishedAt,
				link,
				categories: data.tags,
				author: FEED_AUTHOR,
				customData,
			};
		}),
	});
}
