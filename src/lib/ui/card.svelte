<script module lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';

  const card = cva([], {
    variants: {
      color: {
        card: 'bg-card',
        fade: 'bg-fade',
      },
      size: {
        sm: 'rounded-lg p-4 shadow-md',
        md: 'rounded-xl p-8 shadow-xl',
        lg: 'rounded-2xl p-12 shadow-2xl',
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
  const { color, size, class: className, children }: Props = $props();
  const classes = $derived(twMerge(card({ color, size, className })));
</script>

<div class={classes}>{@render children?.()}</div>
