/// <reference lib="webworker" />

declare const self: ServiceWorkerGlobalScope;

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));

self.addEventListener('activate', event => event.waitUntil(retire()));

async function retire() {
	const keys = await caches.keys();
	await Promise.all([
		self.registration.unregister(),
		...keys.map(async key => await caches.delete(key)),
	]);
}
