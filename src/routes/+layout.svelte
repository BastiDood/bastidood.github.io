<script>
  import './index.css';
  import Footer from './Footer.svelte';
  import Header from './Header.svelte';

  import favicon from '$lib/favicon.png?url';
  import og from '$lib/og.webp?url';

  import { afterNavigate, beforeNavigate } from '$app/navigation';
  import { browser } from '$app/environment';
  import { posthog } from 'posthog-js';

  if (browser) {
    beforeNavigate(() => posthog.capture('$pageleave'));
    afterNavigate(() => posthog.capture('$pageview'));
  }

  const { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta property="og:image" content="https://bastidood.github.io{og}" />
</svelte:head>

<Header />
<main class="from-sky space-y-8 bg-linear-to-b to-white">
  {@render children()}
</main>
<Footer />
