import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';
import { defineHastPlugin } from 'satteri';
import { satteri } from '@astrojs/markdown-satteri';

const site = new URL('https://bastidood.dev');

const lazyImages = defineHastPlugin({
	name: 'lazy-images',
	element: {
		filter: ['img'],
		visit(node, context) {
			context.setProperty(node, 'loading', 'lazy');
			context.setProperty(node, 'decoding', 'async');
		},
	},
});

const externalLinks = defineHastPlugin({
	name: 'external-links',
	element: {
		filter: ['a'],
		visit(node, context) {
			if (typeof node.properties.href !== 'undefined') {
				const target = new URL(node.properties.href, site);
				switch (target.protocol) {
					case 'http:':
					case 'https:':
						if (target.origin === site.origin) return;
						context.setProperty(node, 'target', '_blank');
						context.setProperty(node, 'rel', 'noopener noreferrer');
						break;
					default:
						break;
				}
			}
		},
	},
});

export default defineConfig({
	site: site.href,
	output: 'static',
	trailingSlash: 'always',
	compressHTML: true,
	env: {
		schema: {
			PUBLIC_POSTHOG_API_KEY: envField.string({
				context: 'client',
				access: 'public',
				optional: true,
			}),
		},
	},
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'hover',
	},
	integrations: [
		icon({
			iconDir: 'src/features/portfolio/technologies/assets',
			include: {
				devicon: [
					'android',
					'c',
					'capacitor',
					'cmake',
					'cplusplus',
					'css3',
					'denojs',
					'discordjs',
					'docker',
					'electron',
					'express',
					'fastapi',
					'flask',
					'git',
					'github',
					'go',
					'hardhat',
					'html5',
					'java',
					'javascript',
					'linkedin',
					'mongodb',
					'mysql',
					'nextjs',
					'nodejs',
					'php',
					'postgresql',
					'python',
					'react',
					'rust',
					'solidity',
					'solidjs',
					'svelte',
					'tailwindcss',
					'turbo',
					'twitter',
					'typescript',
					'vitejs',
				],
				'simple-icons': [
					'bluesky',
					'devdotto',
					'django',
					'espressif',
					'huggingface',
					'hyper',
					'tokio',
				],
				'token-branded': ['arbitrum-one', 'ethereum', 'solana'],
			},
		}),
		mdx({
			processor: satteri({ hastPlugins: [lazyImages, externalLinks] }),
			shikiConfig: { theme: 'one-dark-pro' },
		}),
		sitemap(),
	],
	vite: {
		plugins: [tailwindcss()],
		build: { assetsInlineLimit: 0 },
	},
});
