import { getCollection } from 'astro:content';

import rss from '@astrojs/rss';
import XMLBuilder from 'fast-xml-builder';
import { lookup } from 'mrmime';

const xmlBuilder = new XMLBuilder({ ignoreAttributes: false, suppressEmptyNode: true });

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

	const channelData: {
		language: string;
		'atom:link': Record<'@_href' | '@_rel' | '@_type', string>;
		lastBuildDate?: string;
	} = {
		language: 'en',
		'atom:link': {
			'@_href': new URL('/articles/rss.xml', context.site).href,
			'@_rel': 'self',
			'@_type': 'application/rss+xml',
		},
	};
	if (typeof lastBuildDate !== 'undefined')
		channelData.lastBuildDate = lastBuildDate.toUTCString();

	return rss({
		title: "Basti Ortiz's Articles",
		description:
			'Articles about software engineering, programming languages, and building dependable systems.',
		site: context.site,
		xmlns: {
			atom: 'http://www.w3.org/2005/Atom',
			media: 'http://search.yahoo.com/mrss/',
		},
		customData: xmlBuilder.build(channelData),
		items: articles.map(article => {
			const link = `/articles/${article.id}/`;
			let customData: string | undefined;
			if (typeof article.data.cover !== 'undefined') {
				const {
					alt,
					src: { src, format, height, width },
				} = article.data.cover;

				const mediaType = lookup(format);
				if (typeof mediaType === 'undefined')
					throw new Error(`Unsupported image format: ${format}`);

				const { href: coverUrl } = new URL(src, new URL(link, context.site));
				customData = xmlBuilder.build({
					'media:content': {
						'@_url': coverUrl,
						'@_type': mediaType,
						'@_medium': 'image',
						'@_width': width,
						'@_height': height,
					},
					'media:thumbnail': {
						'@_url': coverUrl,
						'@_width': width,
						'@_height': height,
					},
					'media:description': {
						'@_type': 'plain',
						'#text': alt,
					},
				});
			}

			return {
				title: article.data.title,
				description: article.data.description,
				pubDate: article.data.publishedAt,
				link,
				categories: article.data.tags,
				customData,
			};
		}),
	});
}
