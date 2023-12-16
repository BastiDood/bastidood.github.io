import type { PageLoad } from './$types.js';
import { fetchArticles } from './api.js';

export const load = (async () => ({ articles: await fetchArticles() })) satisfies PageLoad;
