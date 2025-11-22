<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	interface Props {
		children: Snippet;
		class?: string;
	}

	const { children, class: className }: Props = $props();
	const classes = $derived(
		twMerge('from-sky flex items-center justify-center bg-linear-to-b to-white', className),
	);
</script>

<div class={classes}>
	{@render children()}
</div>
