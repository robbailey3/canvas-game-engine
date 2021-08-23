import { CanvasConfig } from './canvas-config';

export class Canvas {
	private ctx: CanvasRenderingContext2D;

	private config: CanvasConfig = {
		fillColor: '#000000',
		strokeColor: '#000000',
		strokeWidth: 1,
	};

	constructor(private canvas: HTMLCanvasElement) {
		this.ctx = canvas.getContext('2d');
	}

	public setSize(width: number, height: number): void {
		this.canvas.width = width;
		this.canvas.height = height;
	}

	public updateConfig(config: Partial<CanvasConfig>): void {
		for (let [key, value] of Object.entries(config)) {
			this.config[key] = value;
		}
	}

	public clear(): void {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}
