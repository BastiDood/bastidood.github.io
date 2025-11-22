<script>
	import favicon from '$lib/favicon.png?url';
	import Navbar from '$lib/components/navbar.svelte';
	import og from '$lib/og.webp?url';

	import './index.css';
	import Footer from './footer.svelte';

	const { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta property="og:image" content="https://bastidood.github.io{og}" />
</svelte:head>

<Navbar />
{@render children()}
<Footer />
