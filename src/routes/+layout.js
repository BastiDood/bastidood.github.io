import { browser } from '$app/environment';
import { posthog } from 'posthog-js';

export const prerender = true;
export const trailingSlash = 'always';

export function load() {
    if (browser)
        posthog.init('phc_f0e5e0c7IsAgDbqtkDfHGlBPQmW2Sn5KIaTQ7hMSEzF', {
            api_host: 'https://us.i.posthog.com',
            person_profiles: 'never',
            capture_pageview: false,
            capture_pageleave: false,
        });
}
