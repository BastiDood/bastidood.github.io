import type { ImageMetadata } from 'astro';

import type { ProjectTechnologyId } from './project-technologies.ts';

import anchor from './assets/libraries/anchor/logo.png';
import android from './assets/platforms/android/logo.svg';
import arbitrum from './assets/platforms/arbitrum/logo.svg';
import c from './assets/languages/c/logo.svg';
import capacitor from './assets/libraries/capacitor/logo.svg';
import cmake from './assets/platforms/cmake/logo.svg';
import cpp from './assets/languages/cpp/logo.svg';
import css from './assets/languages/css/logo.svg';
import deno from './assets/platforms/deno/logo.svg';
import discordJs from './assets/libraries/discord.js/logo.svg';
import django from './assets/libraries/django/logo.svg';
import docker from './assets/platforms/docker/logo.svg';
import electron from './assets/libraries/electron/logo.svg';
import espressif from './assets/libraries/espressif/logo.svg';
import ethereum from './assets/platforms/ethereum/logo.svg';
import express from './assets/libraries/express/logo.svg';
import fastApi from './assets/libraries/fastapi/logo.svg';
import flask from './assets/libraries/flask/logo.svg';
import git from './assets/platforms/git/logo.svg';
import go from './assets/languages/go/logo.svg';
import hardhat from './assets/libraries/hardhat/logo.svg';
import html from './assets/languages/html/logo.svg';
import huggingFace from './assets/libraries/huggingface/logo.svg';
import hyper from './assets/libraries/hyper/logo.svg';
import java from './assets/languages/java/logo.svg';
import javascript from './assets/languages/js/logo.svg';
import mongodb from './assets/platforms/mongo/logo.svg';
import mysql from './assets/platforms/mysql/logo.svg';
import nextJs from './assets/libraries/nextjs/logo.svg';
import nodeJs from './assets/platforms/node/logo.svg';
import php from './assets/languages/php/logo.svg';
import postgresql from './assets/platforms/postgres/logo.svg';
import python from './assets/languages/python/logo.svg';
import react from './assets/libraries/react/logo.svg';
import rust from './assets/languages/rust/logo.svg';
import solana from './assets/platforms/solana/logo.svg';
import solid from './assets/libraries/solid/logo.svg';
import solidity from './assets/languages/solidity/logo.svg';
import svelte from './assets/libraries/svelte/logo.svg';
import tailwind from './assets/libraries/tailwind/logo.svg';
import tokio from './assets/libraries/tokio/logo.svg';
import turborepo from './assets/platforms/turbo/logo.svg';
import typescript from './assets/languages/ts/logo.svg';
import vite from './assets/platforms/vite/logo.svg';

class TechnologyLogo {
	public constructor(
		public readonly label: string,
		public readonly source: ImageMetadata,
	) {}
}

class TechnologyLogoGroup<Title extends string> {
	public constructor(
		public readonly title: Title,
		public readonly logos: readonly TechnologyLogo[],
	) {}
}

const anchorLogo = new TechnologyLogo('Anchor', anchor);
const androidLogo = new TechnologyLogo('Android', android);
const arbitrumLogo = new TechnologyLogo('Arbitrum', arbitrum);
const capacitorLogo = new TechnologyLogo('Capacitor', capacitor);
const cLogo = new TechnologyLogo('C', c);
const cmakeLogo = new TechnologyLogo('CMake', cmake);
const cppLogo = new TechnologyLogo('C++', cpp);
const cssLogo = new TechnologyLogo('CSS', css);
const denoLogo = new TechnologyLogo('Deno', deno);
const discordJsLogo = new TechnologyLogo('Discord.js', discordJs);
const djangoLogo = new TechnologyLogo('Django', django);
const dockerLogo = new TechnologyLogo('Docker', docker);
const electronLogo = new TechnologyLogo('Electron', electron);
const espressifLogo = new TechnologyLogo('Espressif', espressif);
const ethereumLogo = new TechnologyLogo('Ethereum', ethereum);
const expressLogo = new TechnologyLogo('Express', express);
const fastApiLogo = new TechnologyLogo('FastAPI', fastApi);
const flaskLogo = new TechnologyLogo('Flask', flask);
const gitLogo = new TechnologyLogo('Git', git);
const goLogo = new TechnologyLogo('Go', go);
const hardhatLogo = new TechnologyLogo('Hardhat', hardhat);
const htmlLogo = new TechnologyLogo('HTML', html);
const huggingFaceLogo = new TechnologyLogo('Hugging Face', huggingFace);
const hyperLogo = new TechnologyLogo('Hyper', hyper);
const javaLogo = new TechnologyLogo('Java', java);
const javascriptLogo = new TechnologyLogo('JavaScript', javascript);
const mongodbLogo = new TechnologyLogo('MongoDB', mongodb);
const mysqlLogo = new TechnologyLogo('MySQL', mysql);
const nextJsLogo = new TechnologyLogo('Next.js', nextJs);
const nodeJsLogo = new TechnologyLogo('Node.js', nodeJs);
const phpLogo = new TechnologyLogo('PHP', php);
const postgresqlLogo = new TechnologyLogo('PostgreSQL', postgresql);
const pythonLogo = new TechnologyLogo('Python', python);
const reactLogo = new TechnologyLogo('React', react);
const rustLogo = new TechnologyLogo('Rust', rust);
const solanaLogo = new TechnologyLogo('Solana', solana);
const solidityLogo = new TechnologyLogo('Solidity', solidity);
const solidLogo = new TechnologyLogo('SolidJS', solid);
const svelteLogo = new TechnologyLogo('Svelte', svelte);
const tailwindLogo = new TechnologyLogo('Tailwind CSS', tailwind);
const tokioLogo = new TechnologyLogo('Tokio', tokio);
const turborepoLogo = new TechnologyLogo('Turborepo', turborepo);
const typescriptLogo = new TechnologyLogo('TypeScript', typescript);
const viteLogo = new TechnologyLogo('Vite', vite);

export const proficiencyGroups = [
	new TechnologyLogoGroup('Languages', [
		rustLogo,
		goLogo,
		typescriptLogo,
		javascriptLogo,
		htmlLogo,
		cssLogo,
		pythonLogo,
		javaLogo,
		phpLogo,
		cppLogo,
		cLogo,
		solidityLogo,
	]),
	new TechnologyLogoGroup('Libraries & Frameworks', [
		svelteLogo,
		reactLogo,
		solidLogo,
		tailwindLogo,
		tokioLogo,
		hyperLogo,
		espressifLogo,
		nextJsLogo,
		expressLogo,
		electronLogo,
		capacitorLogo,
		flaskLogo,
		djangoLogo,
		fastApiLogo,
		huggingFaceLogo,
		discordJsLogo,
		hardhatLogo,
		anchorLogo,
	]),
	new TechnologyLogoGroup('Technologies', [
		gitLogo,
		dockerLogo,
		cmakeLogo,
		denoLogo,
		nodeJsLogo,
		androidLogo,
		postgresqlLogo,
		mysqlLogo,
		mongodbLogo,
		solanaLogo,
		ethereumLogo,
		arbitrumLogo,
		viteLogo,
		turborepoLogo,
	]),
] as const;

export const projectTechnologyLogos: Record<ProjectTechnologyId, TechnologyLogo> = {
	anchor: anchorLogo,
	android: androidLogo,
	arbitrum: arbitrumLogo,
	capacitor: capacitorLogo,
	cmake: cmakeLogo,
	cpp: cppLogo,
	css: cssLogo,
	deno: denoLogo,
	espressif: espressifLogo,
	ethereum: ethereumLogo,
	express: expressLogo,
	git: gitLogo,
	hardhat: hardhatLogo,
	html: htmlLogo,
	'hugging-face': huggingFaceLogo,
	hyper: hyperLogo,
	javascript: javascriptLogo,
	mongodb: mongodbLogo,
	nodejs: nodeJsLogo,
	postgresql: postgresqlLogo,
	python: pythonLogo,
	rust: rustLogo,
	solana: solanaLogo,
	solidity: solidityLogo,
	svelte: svelteLogo,
	tailwind: tailwindLogo,
	tokio: tokioLogo,
	typescript: typescriptLogo,
};
