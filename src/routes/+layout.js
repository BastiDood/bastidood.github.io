import { posthog } from 'posthog-js';

import { browser, building, dev } from '$app/environment';

export const prerender = true;
export const trailingSlash = 'always';

export function load() {
  if (browser && !building && !dev)
    posthog.init('phc_f0e5e0c7IsAgDbqtkDfHGlBPQmW2Sn5KIaTQ7hMSEzF', {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'never',
      capture_pageview: true,
      capture_pageleave: 'if_capture_pageview',
    });
}
