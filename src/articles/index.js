import format from 'date-fns/format';
import { assert } from './assert.ts';
import { Article } from './model.js';

const target = document.getElementById('latest');
assert(target !== null);

async function fetchArticles() {
    try {
        const res = await fetch('https://dev.to/api/articles?username=somedood&state=all&per_page=6', {
            // https://developers.forem.com/api#version-1
            headers: { Accept: 'application/vnd.forem.api-v1+json' },
        });
        return Article.array().parse(await res.json());
    } catch (err) {
        console.error(err);
        return null;
    }
}

fetchArticles().then(articles => {
    if (articles === null) {
        target.textContent = 'Failed to fetch latest articles.';
        return;
    }

    target.replaceChildren();
    articles.sort((a, b) => a.published_at.getUTCMilliseconds() - b.published_at.getUTCMilliseconds());

    for (const { url, cover_image, title, description, published_at } of articles) {
        const anchor = target.appendChild(document.createElement('a'));
        anchor.classList.add('dev-article');
        anchor.href = url;

        const image = anchor.appendChild(document.createElement('img'));
        image.src = cover_image;
        image.alt = title;

        const header = anchor.appendChild(document.createElement('h3'));
        header.innerHTML = title;

        const publish = anchor.appendChild(document.createElement('p'));
        const time = publish.appendChild(document.createElement('time'));
        time.dateTime = published_at.toISOString();
        time.textContent = format(published_at, 'LLLL d, y');
        time.insertAdjacentText('beforebegin', 'Published ');

        const body = anchor.appendChild(document.createElement('p'));
        body.innerHTML = description;
    }
});
