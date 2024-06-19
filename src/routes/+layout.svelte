<script>
    import './index.css';
    import Footer from './Footer.svelte';
    import Header from './Header.svelte';
    import favicon from '$lib/favicon.png?url';
    import og from '$lib/og.webp?url';
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <meta property="og:image" content="https://bastidood.github.io{og}" />
</svelte:head>

<Header />
<main class="space-y-8 bg-gradient-to-b from-sky to-white">
    <slot />
</main>
<Footer />
