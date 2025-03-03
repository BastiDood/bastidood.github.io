<script>
    import Logo from '../../routes/Logo.svelte';
    import anchor from '$lib/icons/lib/anchor.png';
    import android from '$lib/icons/tech/android.svg';
    import arbitrum from '$lib/icons/tech/arbitrum.svg';
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
    import ethereum from '$lib/icons/tech/ethereum.svg';
    import express from '$lib/icons/lib/express.svg';
    import fastapi from '$lib/icons/lib/fastapi.svg';
    import flask from '$lib/icons/lib/flask.svg';
    import git from '$lib/icons/tech/git.svg';
    import go from '$lib/icons/lang/go.svg';
    import hardhat from '$lib/icons/lib/hardhat.svg';
    import html from '$lib/icons/lang/html.svg';
    import huggingface from '$lib/icons/lib/huggingface.svg';
    import hyper from '$lib/icons/lib/hyper.svg';
    import java from '$lib/icons/lang/java.svg';
    import js from '$lib/icons/lang/js.svg';
    import mongo from '$lib/icons/tech/mongo.svg';
    import mysql from '$lib/icons/tech/mysql.svg';
    import next from '$lib/icons/lib/nextjs.svg';
    import node from '$lib/icons/tech/node.svg';
    import php from '$lib/icons/lang/php.svg';
    import postgres from '$lib/icons/tech/postgres.svg';
    import python from '$lib/icons/lang/python.svg';
    import react from '$lib/icons/lib/react.svg';
    import rust from '$lib/icons/lang/rust.svg';
    import solana from '$lib/icons/tech/solana.svg';
    import solid from '$lib/icons/lib/solid.svg';
    import solidity from '$lib/icons/lang/solidity.svg';
    import svelte from '$lib/icons/lib/svelte.svg';
    import tailwind from '$lib/icons/lib/tailwind.svg';
    import tokio from '$lib/icons/lib/tokio.svg';
    import ts from '$lib/icons/lang/ts.svg';
    import turbo from '$lib/icons/tech/turbo.svg';
    import vite from '$lib/icons/tech/vite.svg';
</script>

<article
    class="prose prose-headings:mt-0 prose-figcaption:m-0 prose-figcaption:text-base prose-figcaption:text-black flex max-w-none flex-wrap gap-4 text-center"
>
    <section class="flex-1">
        <h2>Languages</h2>
        <div class="not-prose">
            <Logo src={rust} lang="Rust" />
            <Logo src={go} lang="Go" />
            <Logo src={ts} lang="TypeScript" />
            <Logo src={js} lang="JavaScript" />
        </div>
        <div class="not-prose">
            <Logo src={html} lang="HTML" />
            <Logo src={css} lang="CSS" />
            <Logo src={python} lang="Python" />
            <Logo src={java} lang="Java" />
        </div>
        <div class="not-prose">
            <Logo src={php} lang="PHP" width="w-auto" />
            <Logo src={cpp} lang="C++" />
            <Logo src={c} lang="C" />
            <Logo src={solidity} lang="Solidity" />
        </div>
    </section>
    <section class="flex-1">
        <h2>Libraries &amp; Frameworks</h2>
        <div class="not-prose">
            <Logo src={svelte} lang="Svelte" />
            <Logo src={react} lang="React" />
            <Logo src={solid} lang="SolidJS" />
            <Logo src={tailwind} lang="Tailwind" />
        </div>
        <div class="not-prose">
            <Logo src={tokio} lang="Tokio" />
            <Logo src={hyper} lang="Hyper" />
            <Logo src={espressif} lang="Espressif" />
        </div>
        <div class="not-prose">
            <Logo src={next} lang="NextJS" />
            <Logo src={express} lang="Express.js" />
            <Logo src={electron} lang="Electron" />
            <Logo src={discord} lang="Discord.js" />
        </div>
        <div class="not-prose">
            <Logo src={flask} lang="Flask" />
            <Logo src={django} lang="Django" />
            <Logo src={fastapi} lang="FastAPI" />
            <Logo src={huggingface} lang="Huggingface" />
        </div>
        <div class="not-prose">
            <Logo src={hardhat} lang="Hardhat" />
            <Logo src={anchor} lang="Anchor" />
        </div>
    </section>
    <section class="flex-1">
        <h2>Technologies</h2>
        <div class="not-prose">
            <Logo src={git} lang="Git" />
            <Logo src={docker} lang="Docker" />
            <Logo src={cmake} lang="CMake" />
        </div>
        <div class="not-prose">
            <Logo src={deno} lang="Deno" />
            <Logo src={node} lang="Node.js" />
            <Logo src={android} lang="Android" />
        </div>
        <div class="not-prose">
            <Logo src={postgres} lang="PostgreSQL" />
            <Logo src={mysql} lang="MySQL" />
            <Logo src={mongo} lang="MongoDB" />
        </div>
        <div class="not-prose">
            <Logo src={solana} lang="Solana" />
            <Logo src={ethereum} lang="Ethereum" />
            <Logo src={arbitrum} lang="Arbitrum" />
        </div>
        <div class="not-prose">
            <Logo src={vite} lang="Vite" />
            <Logo src={turbo} lang="Turbo" />
        </div>
    </section>
</article>
