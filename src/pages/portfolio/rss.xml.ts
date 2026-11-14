import type { RSSFeedItem } from '@astrojs/rss';

import { getProjects } from '#features/portfolio/get-projects.ts';
import { buildImageMediaData } from '#features/rss/build-image-media-data.ts';
import { buildRssFeed, FEED_AUTHOR } from '#features/rss/build-rss-feed.ts';

export async function GET({ site }: { site: URL }) {
	const projects = await getProjects();

	return await buildRssFeed({
		title: "Basti Ortiz's Portfolio",
		description: 'Selected software, systems, and open-source projects by Basti Ortiz.',
		site,
		pagePath: '/portfolio/',
		feedPath: '/portfolio/rss.xml',
		xmlns: { media: 'http://search.yahoo.com/mrss/' },
		items: projects.map(({ id, data }) => {
			const { href: link } = new URL(`/portfolio/#${id}`, site);
			const item: RSSFeedItem = {
				title: data.title,
				description: data.description,
				link,
				categories: data.technologies,
				author: FEED_AUTHOR,
			};
			if (typeof data.logo !== 'undefined') {
				item.customData = buildImageMediaData(data.logo, new URL(link));
			}
			return item;
		}),
	});
}
