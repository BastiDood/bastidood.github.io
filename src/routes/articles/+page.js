import { fetchArticles } from './api';

export function load() {
  return { articles: fetchArticles() };
}
