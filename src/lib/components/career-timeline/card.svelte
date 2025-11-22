<script lang="ts">
	import type { Snippet } from 'svelte';

	import Card from '$lib/ui/card.svelte';
	import ExternalLink from '$lib/ui/link/external.svelte';

	interface Props {
		date: string;
		title: string;
		companyName: string;
		companyUrl: string;
		children?: Snippet;
	}

	const { date, title, companyName, companyUrl, children }: Props = $props();
</script>

<div
	class="group relative flex max-w-7xl items-center justify-between md:justify-normal md:odd:flex-row-reverse"
>
	<!-- Dot -->
	<div
		class="absolute left-0 flex size-10 shrink-0 translate-x-0 items-center justify-center rounded-full md:static md:order-1 md:translate-x-0"
	>
		<div class="size-3 rounded-full bg-[#b2ebff]"></div>
	</div>
	<!-- Content -->
	<div class="ml-12 w-[calc(100%-4rem)] md:ml-0 md:w-[calc(50%-2.5rem)]">
		<Card size="sm" class="bg-white/90 backdrop-blur-sm transition-colors hover:bg-white">
			<time class="mb-1 block text-xs text-slate-500">{date}</time>
			<h3 class="text-2xl font-bold text-slate-800">{title}</h3>
			<div class="mb-2 text-sm font-medium text-sky-600">
				<ExternalLink href={companyUrl}>{companyName}</ExternalLink>
			</div>
			{#if children}
				<div class="text-sm text-slate-600">
					{@render children()}
				</div>
			{/if}
		</Card>
	</div>
</div>
