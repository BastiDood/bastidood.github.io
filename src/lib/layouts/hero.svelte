<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	import Navbar from '$lib/components/navbar.svelte';

	interface Props {
		children: Snippet;
		class?: string;
	}

	const { children, class: className }: Props = $props();
	const classes = $derived(twMerge('from-sky flex flex-col bg-linear-to-b to-white', className));
</script>

<div class={classes}>
	<Navbar />
	<div class="flex grow items-center justify-center">
		{@render children()}
	</div>
</div>
