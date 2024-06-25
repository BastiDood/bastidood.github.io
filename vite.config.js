import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

import { defineConfig } from 'vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
    plugins: [sveltekit(), purgeCss()],
    build: { assetsInlineLimit: 0 },
    css: { postcss: { plugins: [tailwindcss, autoprefixer] } },
});
