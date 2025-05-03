import { object, pipe, string, transform, url } from 'valibot';
import { marked } from 'marked';

const UrlSchema = pipe(string(), url());

export const Article = object({
  title: string(),
  description: pipe(
    string(),
    transform(str => marked(str, { async: false, pedantic: true })),
    string(),
  ),
  published_at: string(),
  cover_image: UrlSchema,
  url: UrlSchema,
});
