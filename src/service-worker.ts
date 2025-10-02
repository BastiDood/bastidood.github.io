/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

import { build, files, prerendered, version } from '$service-worker';

/** @see https://kit.svelte.dev/docs/service-workers */
const sw = self as unknown as ServiceWorkerGlobalScope;

async function onInstall() {
  const cache = await caches.open(version);
  await cache.addAll([...build, ...files, ...prerendered]);
  await sw.skipWaiting();
}

async function onActivate() {
  const keys = new Set(await caches.keys());
  // eslint-disable-next-line no-console
  if (keys.delete(version)) console.log(`deleting existing at ${version}`);

  const deletionPromises = Array.from(keys, async key => ({
    key,
    deleted: await caches.delete(key),
  }));

  const deletions = await Promise.all(deletionPromises);
  for (const { key, deleted } of deletions)
    if (deleted) console.debug(`deleted cache ${key}`);
    else console.warn(`failed to delete cache ${key}`);

  // Perform a hard-refresh on new content
  const clients = await sw.clients.matchAll({ type: 'window' });
  const navigationPromises = clients.map(async client => await client.navigate(client.url));
  const navigations = await Promise.all(navigationPromises);
  console.log(`reloaded ${navigations.length} clients`);
}

async function onFetch(req: Request) {
  const cache = await caches.open(version);
  const res = await cache.match(req);
  return res ?? fetch(req);
}

sw.addEventListener('install', evt => evt.waitUntil(onInstall()));
sw.addEventListener('activate', evt => evt.waitUntil(onActivate()));
sw.addEventListener('fetch', evt => evt.respondWith(onFetch(evt.request)));
