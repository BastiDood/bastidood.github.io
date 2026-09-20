import { fileURLToPath } from 'node:url';

import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';
import { defineHastPlugin } from 'satteri';
import { satteri } from '@astrojs/markdown-satteri';

const SITE = new URL('https://bastidood.dev');
export default defineConfig({
	site: SITE.href,
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
					'huggingface',
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
					'twitter',
					'typescript',
					'vitejs',
				] as const,
				'simple-icons': [
					'bluesky',
					'devdotto',
					'django',
					'espressif',
					'rss',
					'tokio',
					'turborepo',
					'youtube',
				] as const,
				'token-branded': ['arbitrum-one', 'ethereum', 'solana'] as const,
			},
		}),
		mdx({
			processor: satteri({
				hastPlugins: [
					defineHastPlugin({
						name: 'lazy-images',
						element: {
							filter: ['img'],
							/** Sets Markdown images to be lazy-loaded by default. */
							visit(node, context) {
								context.setProperty(node, 'loading', 'lazy');
								context.setProperty(node, 'decoding', 'async');
							},
						},
					}),
					defineHastPlugin({
						name: 'external-links',
						element: {
							filter: ['a'],
							/** Sets external Markdown links to open in a new tab by default. */
							visit(node, context) {
								if (typeof node.properties.href !== 'undefined') {
									const target = new URL(node.properties.href, SITE);
									switch (target.protocol) {
										case 'http:':
										case 'https:':
											if (target.origin === SITE.origin) return;
											context.setProperty(node, 'target', '_blank');
											context.setProperty(node, 'rel', 'noopener noreferrer');
											break;
										default:
											break;
									}
								}
							},
						},
					}),
					defineHastPlugin({
						name: 'footnotes-separator',
						element: {
							filter: ['section'],
							/** Inserts a horizontal rule before footnotes sections. */
							visit(node, context) {
								if (node.properties.dataFootnotes === true) {
									context.insertBefore(node, {
										type: 'element',
										tagName: 'hr',
										properties: {},
										children: [],
									});
								}
							},
						},
					}),
				],
			}),
			shikiConfig: { theme: 'one-dark-pro' },
		}),
		sitemap(),
	],
	vite: {
		plugins: [
			tailwindcss(),
			{
				name: 'service-worker',
				apply: 'build',
				buildStart() {
					this.emitFile({
						type: 'chunk',
						id: fileURLToPath(new URL('src/service-worker.ts', import.meta.url)),
						fileName: 'service-worker.js',
					});
				},
			},
		],
		build: { assetsInlineLimit: 0 },
	},
});
