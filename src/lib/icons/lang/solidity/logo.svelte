<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';

  import src from './logo.svg?url';

  type Props = Omit<HTMLImgAttributes, 'src' | 'alt'>;
  const props: Props = $props();
</script>

<img {src} alt="Solidity" {...props} />
