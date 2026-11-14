import type { RSSFeedItem } from '@astrojs/rss';

import { getMilestones } from '#features/milestones/get-milestones.ts';
import { buildImageMediaData } from '#features/rss/build-image-media-data.ts';
import { buildRssFeed, FEED_AUTHOR } from '#features/rss/build-rss-feed.ts';

export async function GET({ site }: { site: URL }) {
	const milestones = await getMilestones();
	return await buildRssFeed({
		title: "Basti Ortiz's Milestones",
		description: "Basti Ortiz's career, education, talks, and other professional milestones.",
		site,
		pagePath: '/',
		feedPath: '/rss.xml',
		xmlns: { media: 'http://search.yahoo.com/mrss/' },
		items: milestones.map(({ id, data }) => {
			const { href: link } = new URL(`/#${id}`, site);
			const item: RSSFeedItem = {
				title: data.title,
				description: data.organization.name,
				link,
				author: FEED_AUTHOR,
			};
			if (typeof data.badge !== 'undefined') {
				item.customData = buildImageMediaData(data.badge, new URL(link));
			}
			return item;
		}),
	});
}
