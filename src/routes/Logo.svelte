<script lang="ts">
    // eslint-disable-next-line init-declarations
    export let src: string;
    // eslint-disable-next-line init-declarations
    export let lang: string;
    export let margin: `m-${number}` = 'm-2';
    export let width: `w-${number}` = 'w-12';
    export let height: `h-${number}` = 'h-12';
</script>

<figure class="inline-block {margin}">
    <img {src} alt="{lang} Logo" loading="lazy" class="m-auto {height} {width}" />
    <figcaption class="text-center">{lang}</figcaption>
</figure>
