/** @import { Config } from '@sveltejs/kit' */

import minifyAdapter from 'sveltekit-html-minifier';
import staticAdapter from '@sveltejs/adapter-static';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {Config} */
export default {
    preprocess: vitePreprocess(),
    kit: minifyAdapter({ adapter: staticAdapter({ fallback: '404.html' }) }),
};
