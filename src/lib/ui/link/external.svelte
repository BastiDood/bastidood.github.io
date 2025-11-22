<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Attributes = Omit<HTMLAnchorAttributes, 'target' | 'rel'>;
	interface Props extends Attributes {
		class?: string;
	}

	const { class: className, children, ...props }: Props = $props();
	const classes = $derived(twMerge('text-sky-600 hover:underline', className));
</script>

<a {...props} class={classes} target="_blank" rel="external">{@render children?.()} ↗</a>
