import { objectAsync, string, transformAsync, url } from 'valibot';
import { marked } from 'marked';

const UrlSchema = string([url()]);

export const Article = objectAsync({
    title: string(),
    description: transformAsync(string(), str => marked(str, { pedantic: true })),
    published_at: string(),
    cover_image: UrlSchema,
    url: UrlSchema,
});
