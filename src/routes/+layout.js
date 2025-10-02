import { posthog } from 'posthog-js';

import { browser, building, dev } from '$app/environment';

import { PUBLIC_POSTHOG_API_KEY } from '$lib/env';

export const prerender = true;
export const trailingSlash = 'always';

export function load() {
  // These values will be inlined at build-time.
  if (browser && !building && !dev)
    if (PUBLIC_POSTHOG_API_KEY) {
      console.log('PUBLIC_POSTHOG_API_KEY is present... initializing PostHog');
      posthog.init(PUBLIC_POSTHOG_API_KEY, {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'never',
        capture_pageview: true,
        capture_pageleave: 'if_capture_pageview',
      });
    } else {
      console.warn('PUBLIC_POSTHOG_API_KEY is absent... skipping PostHog initialization');
    }
}
