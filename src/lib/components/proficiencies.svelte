<script>
  import Card from '$lib/ui/card.svelte';

  import { C } from '$lib/icons/lang/c';
  import { CPlusPlus } from '$lib/icons/lang/cpp';
  import { CSS } from '$lib/icons/lang/css';
  import { Go } from '$lib/icons/lang/go';
  import { HTML } from '$lib/icons/lang/html';
  import { Java } from '$lib/icons/lang/java';
  import { JavaScript } from '$lib/icons/lang/js';
  import { PHP } from '$lib/icons/lang/php';
  import { Python } from '$lib/icons/lang/python';
  import { Rust } from '$lib/icons/lang/rust';
  import { Solidity } from '$lib/icons/lang/solidity';
  import { TypeScript } from '$lib/icons/lang/ts';

  import { Anchor } from '$lib/icons/lib/anchor';
  import { Capacitor } from '$lib/icons/lib/capacitor';
  import { DiscordJS } from '$lib/icons/lib/discord.js';
  import { Django } from '$lib/icons/lib/django';
  import { Electron } from '$lib/icons/lib/electron';
  import { Espressif } from '$lib/icons/lib/espressif';
  import { Express } from '$lib/icons/lib/express';
  import { FastAPI } from '$lib/icons/lib/fastapi';
  import { Flask } from '$lib/icons/lib/flask';
  import { Hardhat } from '$lib/icons/lib/hardhat';
  import { HuggingFace } from '$lib/icons/lib/huggingface';
  import { Hyper } from '$lib/icons/lib/hyper';
  import { NextJS } from '$lib/icons/lib/nextjs';
  import { React } from '$lib/icons/lib/react';
  import { SolidJS } from '$lib/icons/lib/solid';
  import { Svelte } from '$lib/icons/lib/svelte';
  import { Tailwind } from '$lib/icons/lib/tailwind';
  import { Tokio } from '$lib/icons/lib/tokio';

  import { Android } from '$lib/icons/tech/android';
  import { Arbitrum } from '$lib/icons/tech/arbitrum';
  import { CMake } from '$lib/icons/tech/cmake';
  import { Deno } from '$lib/icons/tech/deno';
  import { Docker } from '$lib/icons/tech/docker';
  import { Ethereum } from '$lib/icons/tech/ethereum';
  import { Git } from '$lib/icons/tech/git';
  import { MongoDB } from '$lib/icons/tech/mongo';
  import { MySQL } from '$lib/icons/tech/mysql';
  import { NodeJS } from '$lib/icons/tech/node';
  import { PostgreSQL } from '$lib/icons/tech/postgres';
  import { Solana } from '$lib/icons/tech/solana';
  import { Turbo } from '$lib/icons/tech/turbo';
  import { Vite } from '$lib/icons/tech/vite';
</script>

<article class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  <Card size="md" class="prose">
    <h2>Languages</h2>
    <div class="not-prose flex flex-wrap items-center justify-center gap-3">
      <Rust class="h-10 max-w-16" />
      <Go class="h-10 max-w-16" />
      <TypeScript class="h-10 max-w-16" />
      <JavaScript class="h-10 max-w-16" />
      <HTML class="h-10 max-w-16" />
      <CSS class="h-10 max-w-16" />
      <Python class="h-10 max-w-16" />
      <Java class="h-10 max-w-16" />
      <PHP class="h-10 max-w-16" />
      <CPlusPlus class="h-10 max-w-16" />
      <C class="h-10 max-w-16" />
      <Solidity class="h-10 max-w-16" />
    </div>
  </Card>
  <Card size="md" class="prose">
    <h2>Libraries &amp; Frameworks</h2>
    <div class="not-prose flex flex-wrap items-center justify-center gap-x-3 gap-y-4">
      <Svelte class="h-10 max-w-16" />
      <React class="h-10 max-w-16" />
      <SolidJS class="h-10 max-w-16" />
      <Tailwind class="h-10 max-w-16" />
      <Tokio class="h-10 max-w-16" />
      <Hyper class="h-10 max-w-16" />
      <Espressif class="h-10 max-w-16" />
      <NextJS class="h-10 max-w-16" />
      <Express class="h-10 max-w-16" />
      <Electron class="h-10 max-w-16" />
      <Capacitor class="h-10 max-w-16" />
      <Flask class="h-10 max-w-16" />
      <Django class="h-10 max-w-16" />
      <FastAPI class="h-10 max-w-16" />
      <HuggingFace class="h-10 max-w-16" />
      <DiscordJS class="h-10 max-w-16" />
      <Hardhat class="h-10 max-w-16" />
      <Anchor class="h-10 max-w-16" />
    </div>
  </Card>
  <Card size="md" class="prose">
    <h2>Technologies</h2>
    <div class="not-prose flex flex-wrap items-center justify-center gap-3">
      <Git class="h-10 max-w-16" />
      <Docker class="h-10 max-w-16" />
      <CMake class="h-10 max-w-16" />
      <Deno class="h-10 max-w-16" />
      <NodeJS class="h-10 max-w-16" />
      <Android class="h-10 max-w-16" />
      <PostgreSQL class="h-10 max-w-16" />
      <MySQL class="h-10 max-w-16" />
      <MongoDB class="h-10 max-w-16" />
      <Solana class="h-10 max-w-16" />
      <Ethereum class="h-10 max-w-16" />
      <Arbitrum class="h-10 max-w-16" />
      <Vite class="h-10 max-w-16" />
      <Turbo class="h-10 max-w-16" />
    </div>
  </Card>
</article>
