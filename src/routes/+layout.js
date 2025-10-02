import { posthog } from 'posthog-js';

import { browser, building, dev } from '$app/environment';

export const prerender = true;
export const trailingSlash = 'always';

export async function load() {
  if (browser && !building && !dev) {
    const { PUBLIC_POSTHOG_API_KEY } = await import('$lib/env');
    if (typeof PUBLIC_POSTHOG_API_KEY === 'undefined')
      console.warn('PUBLIC_POSTHOG_API_KEY is absent... skipping PostHog initialization');
    else
      posthog.init(PUBLIC_POSTHOG_API_KEY, {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'never',
        capture_pageview: true,
        capture_pageleave: 'if_capture_pageview',
      });
  }
}
