import { buildImageMediaData } from '#features/rss/build-image-media-data.ts';
import { buildRssFeed, FEED_AUTHOR } from '#features/rss/build-rss-feed.ts';
import { getProjects } from '#features/portfolio/get-projects.ts';
import type { RSSFeedItem } from '@astrojs/rss';

export async function GET(context: { site: URL }) {
	const projects = await getProjects();

	return buildRssFeed({
		title: "Basti Ortiz's Portfolio",
		description: 'Selected software, systems, and open-source projects by Basti Ortiz.',
		site: context.site,
		pagePath: '/portfolio/',
		feedPath: '/portfolio/rss.xml',
		xmlns: { media: 'http://search.yahoo.com/mrss/' },
		items: projects.map(project => {
			const link = new URL(`/portfolio/#${project.id}`, context.site).href;
			const item: RSSFeedItem = {
				title: project.data.title,
				description: project.data.description,
				link,
				categories: project.data.technologies,
				author: FEED_AUTHOR,
			};
			if (typeof project.data.logo !== 'undefined')
				item.customData = buildImageMediaData(project.data.logo, new URL(link));
			return item;
		}),
	});
}
