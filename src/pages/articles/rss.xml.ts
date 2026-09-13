import { getCollection } from 'astro:content';

import { buildImageMediaData } from '#features/rss/build-image-media-data.ts';
import { buildRssFeed, FEED_AUTHOR } from '#features/rss/build-rss-feed.ts';

export async function GET(context: { site: URL }) {
	const articles = await getCollection('articles');
	articles.sort(
		(left, right) => right.data.publishedAt.getTime() - left.data.publishedAt.getTime(),
	);

	let lastBuildDate: Date | undefined;
	for (const article of articles) {
		const changedAt = article.data.updatedAt ?? article.data.publishedAt;
		if (typeof lastBuildDate === 'undefined' || changedAt > lastBuildDate)
			lastBuildDate = changedAt;
	}

	return buildRssFeed({
		title: "Basti Ortiz's Articles",
		description:
			'Articles about software engineering, programming languages, and building dependable systems.',
		site: context.site,
		pagePath: '/articles/',
		feedPath: '/articles/rss.xml',
		lastBuildDate,
		xmlns: { media: 'http://search.yahoo.com/mrss/' },
		items: articles.map(article => {
			const link = `/articles/${article.id}/`;
			let customData: string | undefined;
			if (typeof article.data.cover !== 'undefined')
				customData = buildImageMediaData(article.data.cover, new URL(link, context.site));
			return {
				title: article.data.title,
				description: article.data.description,
				pubDate: article.data.publishedAt,
				link,
				categories: article.data.tags,
				author: FEED_AUTHOR,
				customData,
			};
		}),
	});
}
