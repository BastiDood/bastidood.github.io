import type { ImageMetadata } from 'astro';
import type { CollectionEntry } from 'astro:content';

import anchor from '#features/portfolio/technologies/assets/anchor.png';

type ProjectTechnologyId = CollectionEntry<'projects'>['data']['technologies'][number];

interface IconTechnologyLogoOptions {
	label: string;
	icon: string;
	color?: string;
}

class IconTechnologyLogo {
	readonly kind = 'icon';
	readonly label: string;
	readonly icon: string;
	readonly color: string | undefined;

	constructor({ label, icon, color }: IconTechnologyLogoOptions) {
		this.label = label;
		this.icon = icon;
		this.color = color;
	}
}

class ImageTechnologyLogo {
	readonly kind = 'image';
	readonly label: string;
	readonly source: ImageMetadata;

	constructor(label: string, source: ImageMetadata) {
		this.label = label;
		this.source = source;
	}
}

export type TechnologyLogo = IconTechnologyLogo | ImageTechnologyLogo;

class TechnologyLogoGroup<Title extends string> {
	readonly title: Title;
	readonly logos: readonly TechnologyLogo[];

	constructor(title: Title, logos: readonly TechnologyLogo[]) {
		this.title = title;
		this.logos = logos;
	}
}

const anchorLogo = new ImageTechnologyLogo('Anchor', anchor);
const androidLogo = new IconTechnologyLogo({ label: 'Android', icon: 'devicon:android' });
const arbitrumLogo = new IconTechnologyLogo({
	label: 'Arbitrum',
	icon: 'token-branded:arbitrum-one',
});
const capacitorLogo = new IconTechnologyLogo({ label: 'Capacitor', icon: 'devicon:capacitor' });
const cLogo = new IconTechnologyLogo({ label: 'C', icon: 'devicon:c' });
const cmakeLogo = new IconTechnologyLogo({ label: 'CMake', icon: 'devicon:cmake' });
const cppLogo = new IconTechnologyLogo({ label: 'C++', icon: 'devicon:cplusplus' });
const cssLogo = new IconTechnologyLogo({ label: 'CSS', icon: 'devicon:css3' });
const denoLogo = new IconTechnologyLogo({ label: 'Deno', icon: 'devicon:denojs' });
const discordJsLogo = new IconTechnologyLogo({ label: 'Discord.js', icon: 'devicon:discordjs' });
const djangoLogo = new IconTechnologyLogo({
	label: 'Django',
	icon: 'simple-icons:django',
	color: '#092e20',
});
const dockerLogo = new IconTechnologyLogo({ label: 'Docker', icon: 'devicon:docker' });
const electronLogo = new IconTechnologyLogo({ label: 'Electron', icon: 'devicon:electron' });
const espressifLogo = new IconTechnologyLogo({
	label: 'Espressif',
	icon: 'simple-icons:espressif',
	color: '#e7352c',
});
const ethereumLogo = new IconTechnologyLogo({ label: 'Ethereum', icon: 'token-branded:ethereum' });
const expressLogo = new IconTechnologyLogo({ label: 'Express', icon: 'devicon:express' });
const fastApiLogo = new IconTechnologyLogo({ label: 'FastAPI', icon: 'devicon:fastapi' });
const flaskLogo = new IconTechnologyLogo({ label: 'Flask', icon: 'devicon:flask' });
const gitLogo = new IconTechnologyLogo({ label: 'Git', icon: 'devicon:git' });
const goLogo = new IconTechnologyLogo({ label: 'Go', icon: 'devicon:go' });
const hardhatLogo = new IconTechnologyLogo({ label: 'Hardhat', icon: 'devicon:hardhat' });
const htmlLogo = new IconTechnologyLogo({ label: 'HTML', icon: 'devicon:html5' });
const huggingFaceLogo = new IconTechnologyLogo({
	label: 'Hugging Face',
	icon: 'devicon:huggingface',
});
const javaLogo = new IconTechnologyLogo({ label: 'Java', icon: 'devicon:java' });
const javascriptLogo = new IconTechnologyLogo({ label: 'JavaScript', icon: 'devicon:javascript' });
const mongodbLogo = new IconTechnologyLogo({ label: 'MongoDB', icon: 'devicon:mongodb' });
const mysqlLogo = new IconTechnologyLogo({ label: 'MySQL', icon: 'devicon:mysql' });
const nextJsLogo = new IconTechnologyLogo({ label: 'Next.js', icon: 'devicon:nextjs' });
const nodeJsLogo = new IconTechnologyLogo({ label: 'Node.js', icon: 'devicon:nodejs' });
const phpLogo = new IconTechnologyLogo({ label: 'PHP', icon: 'devicon:php' });
const postgresqlLogo = new IconTechnologyLogo({ label: 'PostgreSQL', icon: 'devicon:postgresql' });
const pythonLogo = new IconTechnologyLogo({ label: 'Python', icon: 'devicon:python' });
const reactLogo = new IconTechnologyLogo({ label: 'React', icon: 'devicon:react' });
const rustLogo = new IconTechnologyLogo({ label: 'Rust', icon: 'devicon:rust' });
const solanaLogo = new IconTechnologyLogo({ label: 'Solana', icon: 'token-branded:solana' });
const solidityLogo = new IconTechnologyLogo({ label: 'Solidity', icon: 'devicon:solidity' });
const solidLogo = new IconTechnologyLogo({ label: 'SolidJS', icon: 'devicon:solidjs' });
const svelteLogo = new IconTechnologyLogo({ label: 'Svelte', icon: 'devicon:svelte' });
const tailwindLogo = new IconTechnologyLogo({ label: 'Tailwind CSS', icon: 'devicon:tailwindcss' });
const tokioLogo = new IconTechnologyLogo({
	label: 'Tokio',
	icon: 'simple-icons:tokio',
	color: '#000000',
});
const turborepoLogo = new IconTechnologyLogo({
	label: 'Turborepo',
	icon: 'simple-icons:turborepo',
	color: '#ff1e56',
});
const typescriptLogo = new IconTechnologyLogo({ label: 'TypeScript', icon: 'devicon:typescript' });
const viteLogo = new IconTechnologyLogo({ label: 'Vite', icon: 'devicon:vitejs' });

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
