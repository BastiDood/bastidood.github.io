/// <reference lib="webworker" />

const worker = globalThis as typeof globalThis & ServiceWorkerGlobalScope;

async function retire() {
	const keys = await caches.keys();
	await Promise.all([worker.registration.unregister(), ...keys.map(key => caches.delete(key))]);
}

worker.addEventListener('install', (event: ExtendableEvent) =>
	event.waitUntil(worker.skipWaiting()),
);

worker.addEventListener('activate', (event: ExtendableEvent) => event.waitUntil(retire()));
