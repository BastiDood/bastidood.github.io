<script>
	import HeroLayout from '$lib/layouts/hero.svelte';
	import Proficiencies from '$lib/components/proficiencies.svelte';

	const { children } = $props();
</script>

<HeroLayout>
	<div class="m-4 sm:m-12 md:m-16">
		<Proficiencies />
	</div>
</HeroLayout>
<div class="m-4 mt-0! sm:m-12 md:m-16">
	{@render children()}
</div>
