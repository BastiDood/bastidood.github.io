import { marked } from 'marked';
import { object, pipe, string, transform, url } from 'valibot';

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
