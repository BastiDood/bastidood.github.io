import type { PageLoad } from './$types.js';
import { fetchArticles } from './api.js';

export const load = (async () => {
    const articles = await fetchArticles();
    return { articles };
}) satisfies PageLoad;
