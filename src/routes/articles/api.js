import * as v from 'valibot';

import { Article } from './model';

const Articles = v.array(Article);
export async function fetchArticles() {
	// https://developers.forem.com/api#version-1
	const res = await fetch('https://dev.to/api/articles?username=somedood&state=all&per_page=6', {
		headers: { Accept: 'application/vnd.forem.api-v1+json' },
	});
	return v.parse(Articles, await res.json());
}
