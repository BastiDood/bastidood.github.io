import type { CollectionEntry } from 'astro:content';

import anchor from '#features/portfolio/technologies/assets/anchor.png';
import type { ImageMetadata } from 'astro';

type ProjectTechnologyId = CollectionEntry<'projects'>['data']['technologies'][number];

class IconTechnologyLogo {
	public readonly kind = 'icon';

	public constructor(
		public readonly label: string,
		public readonly icon: string,
		public readonly color?: string,
	) {}
}

class ImageTechnologyLogo {
	public readonly kind = 'image';

	public constructor(
		public readonly label: string,
		public readonly source: ImageMetadata,
	) {}
}

export type TechnologyLogo = IconTechnologyLogo | ImageTechnologyLogo;

class TechnologyLogoGroup<Title extends string> {
	public constructor(
		public readonly title: Title,
		public readonly logos: readonly TechnologyLogo[],
	) {}
}

const anchorLogo = new ImageTechnologyLogo('Anchor', anchor);
const androidLogo = new IconTechnologyLogo('Android', 'devicon:android');
const arbitrumLogo = new IconTechnologyLogo('Arbitrum', 'token-branded:arbitrum-one');
const capacitorLogo = new IconTechnologyLogo('Capacitor', 'devicon:capacitor');
const cLogo = new IconTechnologyLogo('C', 'devicon:c');
const cmakeLogo = new IconTechnologyLogo('CMake', 'devicon:cmake');
const cppLogo = new IconTechnologyLogo('C++', 'devicon:cplusplus');
const cssLogo = new IconTechnologyLogo('CSS', 'devicon:css3');
const denoLogo = new IconTechnologyLogo('Deno', 'devicon:denojs');
const discordJsLogo = new IconTechnologyLogo('Discord.js', 'devicon:discordjs');
const djangoLogo = new IconTechnologyLogo('Django', 'simple-icons:django', '#092e20');
const dockerLogo = new IconTechnologyLogo('Docker', 'devicon:docker');
const electronLogo = new IconTechnologyLogo('Electron', 'devicon:electron');
const espressifLogo = new IconTechnologyLogo('Espressif', 'simple-icons:espressif', '#e7352c');
const ethereumLogo = new IconTechnologyLogo('Ethereum', 'token-branded:ethereum');
const expressLogo = new IconTechnologyLogo('Express', 'devicon:express');
const fastApiLogo = new IconTechnologyLogo('FastAPI', 'devicon:fastapi');
const flaskLogo = new IconTechnologyLogo('Flask', 'devicon:flask');
const gitLogo = new IconTechnologyLogo('Git', 'devicon:git');
const goLogo = new IconTechnologyLogo('Go', 'devicon:go');
const hardhatLogo = new IconTechnologyLogo('Hardhat', 'devicon:hardhat');
const htmlLogo = new IconTechnologyLogo('HTML', 'devicon:html5');
const huggingFaceLogo = new IconTechnologyLogo('Hugging Face', 'devicon:huggingface');
const hyperLogo = new IconTechnologyLogo('Hyper', 'simple-icons:hyper', '#000000');
const javaLogo = new IconTechnologyLogo('Java', 'devicon:java');
const javascriptLogo = new IconTechnologyLogo('JavaScript', 'devicon:javascript');
const mongodbLogo = new IconTechnologyLogo('MongoDB', 'devicon:mongodb');
const mysqlLogo = new IconTechnologyLogo('MySQL', 'devicon:mysql');
const nextJsLogo = new IconTechnologyLogo('Next.js', 'devicon:nextjs');
const nodeJsLogo = new IconTechnologyLogo('Node.js', 'devicon:nodejs');
const phpLogo = new IconTechnologyLogo('PHP', 'devicon:php');
const postgresqlLogo = new IconTechnologyLogo('PostgreSQL', 'devicon:postgresql');
const pythonLogo = new IconTechnologyLogo('Python', 'devicon:python');
const reactLogo = new IconTechnologyLogo('React', 'devicon:react');
const rustLogo = new IconTechnologyLogo('Rust', 'devicon:rust');
const solanaLogo = new IconTechnologyLogo('Solana', 'token-branded:solana');
const solidityLogo = new IconTechnologyLogo('Solidity', 'devicon:solidity');
const solidLogo = new IconTechnologyLogo('SolidJS', 'devicon:solidjs');
const svelteLogo = new IconTechnologyLogo('Svelte', 'devicon:svelte');
const tailwindLogo = new IconTechnologyLogo('Tailwind CSS', 'devicon:tailwindcss');
const tokioLogo = new IconTechnologyLogo('Tokio', 'simple-icons:tokio', '#000000');
const turborepoLogo = new IconTechnologyLogo('Turborepo', 'devicon:turbo');
const typescriptLogo = new IconTechnologyLogo('TypeScript', 'devicon:typescript');
const viteLogo = new IconTechnologyLogo('Vite', 'devicon:vitejs');

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

export const projectTechnologyLogos = {
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
} satisfies Record<ProjectTechnologyId, TechnologyLogo>;
