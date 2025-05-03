<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title: string;
    href: string;
    src: string;
    alt: string;
    datetime: string;
    children: Snippet;
  }

  const { title, href, src, alt, datetime, children }: Props = $props();
  const fmt = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' });
  const formatted = $derived(fmt.format(new Date(datetime)));
</script>

<article>
  <a {href}><img width="1000" height="420" {src} {alt} /></a>
  <h3>{title}</h3>
  <p>Published <time {datetime}>{formatted}</time></p>
  {@render children()}
</article>
