import { compose } from '@bastidood/oxfmt-config';
import { ASTRO } from '@bastidood/oxfmt-config/astro';
import { CORE } from '@bastidood/oxfmt-config/core';
import { defineConfig } from 'oxfmt';

export default defineConfig(
	compose(CORE, ASTRO, {
		ignorePatterns: ['pnpm-lock.yaml'],
		sortTailwindcss: { stylesheet: './src/layout/global.css', functions: ['cn', 'tv'] },
	}),
);
