import type { APIRoute } from 'astro';

export const GET = (({ site }) => {
	if (typeof site === 'undefined') {
		throw new Error('Set site in `astro.config.ts` to generate `robots.txt`.');
	}

	const sitemap = new URL('/sitemap-index.xml', site);
	return new Response(`User-agent: *
Allow: /

Sitemap: ${sitemap.href}
`);
}) satisfies APIRoute;
