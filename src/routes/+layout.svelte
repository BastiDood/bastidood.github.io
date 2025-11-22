<script>
	import favicon from '$lib/favicon.png?url';
	import og from '$lib/og.webp?url';

	import './index.css';
	import Footer from './footer.svelte';

	const { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta property="og:image" content="https://bastidood.github.io{og}" />
</svelte:head>

{@render children()}
<Footer />
