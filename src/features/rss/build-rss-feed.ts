import rss, { type RSSOptions } from '@astrojs/rss';

import favicon from '#branding/profile.png';
import { buildXml } from '#lib/xml.ts';

interface RssFeedOptions extends Omit<RSSOptions, 'customData' | 'site' | 'xmlns'> {
	feedPath: string;
	lastBuildDate?: Date | undefined;
	pagePath: string;
	site: URL;
	xmlns?: RSSOptions['xmlns'];
}

export const FEED_AUTHOR = 'ortiz@bastidood.dev (Basti Ortiz)';

export async function buildRssFeed({
	feedPath,
	lastBuildDate,
	pagePath,
	site,
	xmlns,
	...options
}: RssFeedOptions) {
	const pageUrl = new URL(pagePath, site);
	const { href: feedUrl } = new URL(feedPath, site);
	const { href } = new URL(favicon.src, site);
	const channelData = {
		language: 'en',
		image: {
			url: href,
			title: options.title,
			link: pageUrl.href,
			width: favicon.width,
			height: favicon.height,
		},
		'atom:icon': href,
		'atom:link': {
			'@_href': feedUrl,
			'@_rel': 'self',
			'@_type': 'application/rss+xml',
		},
	};
	const dateData =
		typeof lastBuildDate === 'undefined' ? {} : { lastBuildDate: lastBuildDate.toUTCString() };
	return await rss({
		...options,
		site: pageUrl,
		xmlns: { ...xmlns, atom: 'http://www.w3.org/2005/Atom' },
		customData: buildXml({ ...channelData, ...dateData }),
	});
}
