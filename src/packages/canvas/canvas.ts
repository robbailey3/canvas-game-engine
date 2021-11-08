import { Vector } from "..";
import { CanvasConfig } from "./canvas-config";

export class Canvas {
  private ctx: CanvasRenderingContext2D;

  private config: CanvasConfig = {
    fillColor: "#000000",
    strokeColor: "#000000",
    strokeWidth: 1,
    backgroundColor: "#ffffff"
  };

  constructor(private canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d");
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
    this.rect(
      0,
      0,
      this.canvas.width,
      this.canvas.height,
      0,
      this.config.backgroundColor
    );
  }

  public rect(
    x: number,
    y: number,
    width: number,
    height: number,
    rotation = 0,
    fillColor = this.config.fillColor
  ): void {
    this.ctx.save();
    this.ctx.fillStyle = fillColor;
    this.ctx.translate(x + width / 2, y + height / 2);
    this.ctx.rotate(rotation);
    this.ctx.fillRect(-width / 2, -height / 2, width, height);
    this.ctx.restore();
  }

  public circle(
    x: number,
    y: number,
    radius: number,
    fillColor = this.config.fillColor
  ): void {
    this.ellipse(x, y, radius, radius, 0, fillColor);
  }

  public ellipse(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotation = 0,
    fillColor = this.config.fillColor
  ): void {
    this.ctx.save();
    this.ctx.fillStyle = fillColor;
    this.ctx.ellipse(x, y, radiusX, radiusY, rotation, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.restore();
  }

  public line(
    start: Vector,
    end: Vector,
    strokeColor = this.config.strokeColor
  ) {
    this.ctx.save();
    this.ctx.strokeStyle = strokeColor;
    this.ctx.moveTo(start.x, start.y);
    this.ctx.beginPath();
    this.ctx.lineTo(end.x, end.y);
    this.ctx.stroke();
    this.ctx.restore();
  }
}
