<script>
    import './index.css';
    import profile from '$lib/images/profile.webp';
</script>

<header class="sticky top-0 w-full bg-brand text-white shadow-md">
    <nav>
        <ul class="flex">
            <li>
                <a class="block p-4 transition-colors hover:bg-hover" href="/">Home</a>
            </li>
            <li>
                <a class="block p-4 transition-colors hover:bg-hover" href="/portfolio/">Portfolio</a>
            </li>
            <li>
                <a class="block p-4 transition-colors hover:bg-hover" href="/articles/">Articles</a>
            </li>
        </ul>
    </nav>
</header>
<main class="bg-gradient-to-b from-sky to-white space-y-8">
    <slot />
</main>
<footer class="flex bg-brand text-white text-xs justify-around p-4">
    <section>
        <img src="{profile}" alt="BastiDood" width="64" height="64" loading="lazy" />
        <p>&#169; 2023 Basti Ortiz</p>
    </section>
    <section>
        <h6 class="underline">Links</h6>
        <ul>
            <li><a href="https://github.com/BastiDood">GitHub (@BastiDood)</a></li>
            <li><a href="https://dev.to/somedood">dev.to (@somedood)</a></li>
            <li>
                <a href="https://www.linkedin.com/in/basti-ortiz/" title="LinkedIn">LinkedIn (in/basti-ortiz)</a>
            </li>
            <li>
                <a href="https://twitter.com/BastiDood" title="Twitter">Twitter (@BastiDood)</a>
            </li>
        </ul>
    </section>
    <section>
        <h6 class="underline">Code</h6>
        <ul>
            <li><a href="https://github.com/BastiDood/bastidood.github.io">Repository</a></li>
            <li>
                <a href="https://github.com/BastiDood/bastidood.github.io/blob/main/COPYING.md">External Assets</a>
            </li>
        </ul>
    </section>
</footer>
