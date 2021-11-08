import { Canvas } from "../..";
import { Vector } from "../../vector";
import { GameObject } from "../game-object";

export class Rectangle implements GameObject {
  constructor(
    public canvas: Canvas,
    public position: Vector,
    public velocity: Vector,
    public width: number,
    public height: number,
    public rotation?: number
  ) {}

  public setRotation(rotation: number) {
    this.rotation = rotation;
  }

  public move() {
    this.position = this.position.add(this.velocity);
  }
  public draw() {
    this.canvas.rect(this.position.x, this.position.y, 10, 10);
  }
}
