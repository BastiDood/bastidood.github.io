import { compose } from '@bastidood/eslint-config';
import { ASTRO } from '@bastidood/eslint-config-astro';
import { CORE } from '@bastidood/eslint-config/core';
import css from '@eslint/css';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import { tailwind4 } from 'tailwind-csstree';

export default defineConfig(
	globalIgnores(['.astro/', 'dist/']),
	{
		files: ['**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}'],
		ignores: ['**/*.astro/**'],
		extends: compose(CORE),
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
	},
	{
		files: ['**/*.astro', '**/*.astro/*.{js,ts}'],
		extends: compose(ASTRO),
	},
	{
		files: ['**/*.css'],
		plugins: { css },
		extends: ['css/recommended'],
		language: 'css/css',
		languageOptions: { customSyntax: tailwind4 },
		rules: { 'css/prefer-logical-properties': 'error' },
	},
);
