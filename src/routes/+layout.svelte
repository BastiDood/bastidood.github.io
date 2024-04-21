<script>
    import './index.css';
    import Footer from './Footer.svelte';
    import Header from './Header.svelte';
</script>

<Header />
<main class="space-y-8 bg-gradient-to-b from-sky to-white">
    <slot />
</main>
<Footer />
