import { getCollection } from 'astro:content';

import rss from '@astrojs/rss';

export async function GET(context: { site: URL }) {
	const articles = await getCollection('articles');
	articles.sort((left, right) => right.data.publishedAt.localeCompare(left.data.publishedAt));

	return rss({
		title: "Basti Ortiz's Articles",
		description:
			'Articles about software engineering, programming languages, and building dependable systems.',
		site: context.site,
		items: articles.map(article => ({
			title: article.data.title,
			description: article.data.description,
			pubDate: new Date(article.data.publishedAt),
			link: `/articles/${article.id}/`,
			categories: article.data.tags,
		})),
	});
}
