/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

import { build, files, prerendered, version } from '$service-worker';

import { assert } from './lib/assert';

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

  const promises = Array.from(keys, k => caches.delete(k));
  const results = await Promise.all(promises);
  assert(
    results.every(x => x),
    'cannot delete all of the old caches',
  );
}

async function onFetch(req: Request) {
  const cache = await caches.open(version);
  const res = await cache.match(req);
  return res ?? fetch(req);
}

sw.addEventListener('install', evt => evt.waitUntil(onInstall()));
sw.addEventListener('activate', evt => evt.waitUntil(onActivate()));
sw.addEventListener('fetch', evt => evt.respondWith(onFetch(evt.request)));
