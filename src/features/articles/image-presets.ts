interface ImagePresetDefinitionOptions {
	width: number;
	height: number;
	fit: 'cover';
	position: 'center';
	format: 'png';
	widths: number[];
	sizes: string;
}

export class ImagePresetDefinition {
	public readonly width: number;
	public readonly height: number;
	public readonly fit: 'cover';
	public readonly position: 'center';
	public readonly format: 'png';
	public readonly widths: number[];
	public readonly sizes: string;

	public constructor({
		width,
		height,
		fit,
		position,
		format,
		widths,
		sizes,
	}: ImagePresetDefinitionOptions) {
		this.width = width;
		this.height = height;
		this.fit = fit;
		this.position = position;
		this.format = format;
		this.widths = widths;
		this.sizes = sizes;
	}
}

export const imagePresets = {
	'article-card': new ImagePresetDefinition({
		width: 600,
		height: 252,
		fit: 'cover',
		position: 'center',
		format: 'png',
		widths: [300, 400, 600, 1000],
		sizes: '(min-width: 1280px) 411px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
	}),
	'article-cover': new ImagePresetDefinition({
		width: 1000,
		height: 420,
		fit: 'cover',
		position: 'center',
		format: 'png',
		widths: [480, 720, 1000],
		sizes: '(min-width: 896px) 896px, 100vw',
	}),
	'open-graph': new ImagePresetDefinition({
		width: 1000,
		height: 420,
		fit: 'cover',
		position: 'center',
		format: 'png',
		widths: [1000],
		sizes: '1000px',
	}),
} as const;

export type ImagePresetName = keyof typeof imagePresets;
