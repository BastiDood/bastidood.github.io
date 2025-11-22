<script>
	import HeroLayout from '$lib/layouts/hero.svelte';

	import Hero from './hero.svelte';

	const { children } = $props();
</script>

<HeroLayout class="h-dvh">
	<Hero />
</HeroLayout>
<div class="m-4 mt-0! flex flex-col gap-12 sm:m-12 md:m-16">
	{@render children()}
</div>
