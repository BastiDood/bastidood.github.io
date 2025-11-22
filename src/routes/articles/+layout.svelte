<script>
	import Card from '$lib/ui/card.svelte';
	import HeroLayout from '$lib/layouts/hero.svelte';

	const { children } = $props();
</script>

<HeroLayout>
	<div class="m-4 sm:m-12 md:m-16">
		<Card size="md" class="prose">
			<h1>Articles</h1>
			<p>
				In my spare time, I write technical blog posts at <a href="https://dev.to">dev.to</a
				>
				(<a href="https://dev.to/somedood">@somedood</a>) about various topics in web
				development, systems programming, and computer science. As such, many of my articles
				discuss JavaScript best practices, design patterns, performance techniques, and
				limitations. In other times, I focus on the low-level implications of systems
				programming patterns—particularly in the context of Rust, C, and C++.
			</p>
		</Card>
	</div>
</HeroLayout>
<div class="m-4 mt-0! sm:m-12 md:m-16">
	{@render children()}
</div>
