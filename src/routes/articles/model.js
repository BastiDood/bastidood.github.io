import { date, number, objectAsync, string, transform, transformAsync, union, url } from 'valibot';
import { marked } from 'marked';

const UrlSchema = string([url()]);

export const Article = objectAsync({
    title: string(),
    description: transformAsync(string(), str => marked(str, { pedantic: true })),
    published_at: transform(union([string(), number(), date()]), input => new Date(input)),
    cover_image: UrlSchema,
    url: UrlSchema,
});
