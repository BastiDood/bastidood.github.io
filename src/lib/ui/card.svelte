<script module lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';

	const card = cva([], {
		variants: {
			color: {
				card: 'bg-card',
				fade: 'bg-fade',
			},
			size: {
				sm: 'rounded-lg p-4 border border-slate-200/60 shadow-sm',
				md: 'rounded-xl p-8 border border-slate-200/60 shadow-sm',
				lg: 'rounded-2xl p-12 border border-slate-200/60 shadow-sm',
			},
		},
		defaultVariants: {
			color: 'card',
		},
	});

	type CardProps = VariantProps<typeof card>;
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { twMerge } from 'tailwind-merge';

	type Props = CardProps & HTMLAttributes<HTMLDivElement>;
	const { color, size, class: className, children, ...props }: Props = $props();
	const classes = $derived(twMerge(card({ color, size, className })));
</script>

<div class={classes} {...props}>{@render children?.()}</div>
