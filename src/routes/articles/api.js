import { arrayAsync, parseAsync } from 'valibot';

import { Article } from './model';

export async function fetchArticles() {
  try {
    // https://developers.forem.com/api#version-1
    const res = await fetch('https://dev.to/api/articles?username=somedood&state=all&per_page=6', {
      headers: { Accept: 'application/vnd.forem.api-v1+json' },
    });
    return parseAsync(arrayAsync(Article), await res.json());
  } catch (err) {
    console.error(err);
    throw err;
  }
}
