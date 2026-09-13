import { buildXml } from '#lib/xml.ts';
import type { ImageMetadata } from 'astro';
import { lookup } from 'mrmime';

interface FeedImage {
	alt: string;
	src: ImageMetadata;
}

export function buildImageMediaData(image: FeedImage, pageUrl: URL) {
	const {
		alt,
		src: { src, format, height, width },
	} = image;
	const mediaType = lookup(format);
	if (typeof mediaType === 'undefined') throw new Error(`Unsupported image format: ${format}`);

	const { href: imageUrl } = new URL(src, pageUrl);
	return buildXml({
		'media:content': {
			'@_url': imageUrl,
			'@_type': mediaType,
			'@_medium': 'image',
			'@_width': width,
			'@_height': height,
		},
		'media:thumbnail': {
			'@_url': imageUrl,
			'@_width': width,
			'@_height': height,
		},
		'media:description': {
			'@_type': 'plain',
			'#text': alt,
		},
	});
}
