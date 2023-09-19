import type { PageLoad } from './$types.js';
import { fetchArticles } from './api.js';

export const load = (() => ({ articles: fetchArticles() })) satisfies PageLoad;
