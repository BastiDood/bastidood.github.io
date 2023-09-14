<script>
    import Logo from './Logo.svelte';
    import c from '$lib/icons/lang/c.svg';
    import cmake from '$lib/icons/tech/cmake.svg';
    import cpp from '$lib/icons/lang/cpp.svg';
    import css from '$lib/icons/lang/css.svg';
    import deno from '$lib/icons/tech/deno.svg';
    import discord from '$lib/icons/lib/discord.js.svg';
    import django from '$lib/icons/lib/django.svg';
    import docker from '$lib/icons/tech/docker.svg';
    import electron from '$lib/icons/lib/electron.svg';
    import espressif from '$lib/icons/lib/espressif.svg';
    import express from '$lib/icons/lib/express.svg';
    import flask from '$lib/icons/lib/flask.svg';
    import git from '$lib/icons/tech/git.svg';
    import html from '$lib/icons/lang/html.svg';
    import huggingface from '$lib/icons/lib/huggingface.svg';
    import hyper from '$lib/icons/lib/hyper.svg';
    import js from '$lib/icons/lang/js.svg';
    import mongo from '$lib/icons/tech/mongo.svg';
    import node from '$lib/icons/tech/node.svg';
    import postgres from '$lib/icons/tech/postgres.svg';
    import python from '$lib/icons/lang/python.svg';
    import rust from '$lib/icons/lang/rust.svg';
    import solid from '$lib/icons/lib/solid.svg';
    import svelte from '$lib/icons/lib/svelte.svg';
    import tailwind from '$lib/icons/lib/tailwind.svg';
    import tokio from '$lib/icons/lib/tokio.svg';
    import ts from '$lib/icons/lang/ts.svg';
</script>

<article
    class="flex flex-wrap gap-4 text-center prose prose-headings:mt-0 prose-figcaption:text-black prose-figcaption:text-base prose-figcaption:m-0 max-w-none"
>
    <section class="flex-1">
        <h2>Languages</h2>
        <div>
            <Logo src="{rust}" lang="Rust" />
            <!-- TODO: Go -->
            <Logo src="{ts}" lang="TypeScript" />
            <Logo src="{js}" lang="JavaScript" />
        </div>
        <div>
            <Logo src="{html}" lang="HTML" />
            <Logo src="{css}" lang="CSS" />
            <Logo src="{python}" lang="Python" />
        </div>
        <div>
            <Logo src="{cpp}" lang="C++" />
            <Logo src="{c}" lang="C" />
            <!-- TODO: PHP -->
            <!-- TODO: Java -->
        </div>
    </section>
    <section class="flex-1">
        <h2>Libraries &amp; Frameworks</h2>
        <div>
            <Logo src="{svelte}" lang="Svelte" />
            <!-- TODO: React -->
            <Logo src="{solid}" lang="SolidJS" />
            <Logo src="{tailwind}" lang="TailwindCSS" />
        </div>
        <div>
            <Logo src="{tokio}" lang="Tokio" />
            <Logo src="{hyper}" lang="Hyper" />
            <Logo src="{espressif}" lang="Espressif" />
        </div>
        <div>
            <Logo src="{express}" lang="Express.js" />
            <Logo src="{electron}" lang="Electron" />
            <Logo src="{discord}" lang="Discord.js" />
        </div>
        <div>
            <Logo src="{flask}" lang="Flask" />
            <Logo src="{django}" lang="Django" />
            <!-- TODO: FastAPI -->
            <Logo src="{huggingface}" lang="Huggingface" />
        </div>
    </section>
    <section class="flex-1">
        <h2>Technologies</h2>
        <div>
            <Logo src="{git}" lang="Git" />
            <Logo src="{docker}" lang="Docker" />
            <Logo src="{cmake}" lang="CMake" />
        </div>
        <div>
            <Logo src="{deno}" lang="Deno" />
            <Logo src="{node}" lang="Node.js" />
        </div>
        <div>
            <Logo src="{postgres}" lang="PostgreSQL" />
            <Logo src="{mongo}" lang="MongoDB" />
            <!-- TODO: MySQL -->
        </div>
    </section>
</article>
