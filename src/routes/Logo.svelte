<script lang="ts">
  type TailwindDimension = number | 'auto';

  interface Props {
    src: string;
    lang: string;
    margin?: `m-${number}`; // = 'm-2';
    width?: `w-${TailwindDimension}`; // = 'w-12';
    height?: `h-${TailwindDimension}`; // = 'h-12';
  }

  const { src, lang, margin = 'm-2', width = 'w-12', height = 'h-12' }: Props = $props();
</script>

<figure class="inline-block {margin}">
  <img {src} alt="{lang} Logo" loading="lazy" class="m-auto {height} {width}" />
  <figcaption class="text-center">{lang}</figcaption>
</figure>
