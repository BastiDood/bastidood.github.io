import favicon from '#branding/profile.png';
import rss, { type RSSOptions } from '@astrojs/rss';
import { buildXml } from '#lib/xml.ts';

interface RssFeedOptions extends Omit<RSSOptions, 'customData' | 'site' | 'xmlns'> {
	feedPath: string;
	lastBuildDate?: Date | undefined;
	pagePath: string;
	site: URL;
	xmlns?: RSSOptions['xmlns'];
}

export const FEED_AUTHOR = 'ortiz@bastidood.dev (Basti Ortiz)';

export function buildRssFeed({
	feedPath,
	lastBuildDate,
	pagePath,
	site,
	xmlns,
	...options
}: RssFeedOptions) {
	const pageUrl = new URL(pagePath, site);
	const { href } = new URL(favicon.src, site);
	const channelData: {
		language: string;
		image: {
			url: string;
			title: string;
			link: string;
			width: number;
			height: number;
		};
		'atom:icon': string;
		'atom:link': Record<'@_href' | '@_rel' | '@_type', string>;
		lastBuildDate?: string;
	} = {
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
			'@_href': new URL(feedPath, site).href,
			'@_rel': 'self',
			'@_type': 'application/rss+xml',
		},
	};
	if (typeof lastBuildDate !== 'undefined')
		channelData.lastBuildDate = lastBuildDate.toUTCString();
	return rss({
		...options,
		site: pageUrl,
		xmlns: { ...xmlns, atom: 'http://www.w3.org/2005/Atom' },
		customData: buildXml(channelData),
	});
}
