import { buildImageMediaData } from '#features/rss/build-image-media-data.ts';
import { buildRssFeed, FEED_AUTHOR } from '#features/rss/build-rss-feed.ts';
import { getMilestones } from '#features/milestones/get-milestones.ts';
import type { RSSFeedItem } from '@astrojs/rss';

export async function GET(context: { site: URL }) {
	const milestones = await getMilestones();
	return buildRssFeed({
		title: "Basti Ortiz's Milestones",
		description: "Basti Ortiz's career, education, talks, and other professional milestones.",
		site: context.site,
		pagePath: '/',
		feedPath: '/rss.xml',
		xmlns: { media: 'http://search.yahoo.com/mrss/' },
		items: milestones.map(milestone => {
			const link = new URL(`/#${milestone.id}`, context.site).href;
			const item: RSSFeedItem = {
				title: milestone.data.title,
				description: milestone.data.organization.name,
				link,
				author: FEED_AUTHOR,
			};
			if (typeof milestone.data.badge !== 'undefined')
				item.customData = buildImageMediaData(milestone.data.badge, new URL(link));
			return item;
		}),
	});
}
