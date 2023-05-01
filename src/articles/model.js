import { marked } from 'marked';
import { z } from 'zod';

export const Article = z.object({
    title: z.string(),
    description: z.string().transform(str => marked(str, { pedantic: true })),
    published_at: z.coerce.date(),
    cover_image: z.string().url(),
    url: z.string().url(),
});
