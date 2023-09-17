<script lang="ts">
    // eslint-disable-next-line init-declarations
    export let title: string;
    // eslint-disable-next-line init-declarations
    export let href: string;
    // eslint-disable-next-line init-declarations
    export let src: string;
    // eslint-disable-next-line init-declarations
    export let alt: string;
    // eslint-disable-next-line init-declarations
    export let datetime: string;

    const fmt = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' });
    $: formatted = fmt.format(new Date(datetime));
</script>

<article>
    <a {href}><img {src} {alt} /></a>
    <h3>{title}</h3>
    <p>
        Published <time {datetime}>{formatted}</time>
    </p>
    <slot />
</article>
