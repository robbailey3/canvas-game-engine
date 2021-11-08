import { Subscription } from "rxjs";
import { Canvas, Vector } from "..";
import { GameObject } from "../game-object/game-object";
import { Rectangle } from "../game-object/rectangle/rectangle";

export class GameEngine {
  public keypress: Subscription;

  private gameObjects: GameObject[];

  constructor(public canvas: Canvas) {}

  public addGameObject(obj: GameObject): void {
    this.gameObjects.push(obj);
  }

  public removeGameObject(obj: GameObject): void {
    this.gameObjects.splice(this.gameObjects.indexOf(obj), 1);
  }

  public run(updateFn: () => void): void {
    this.canvas.clear();
    this.gameObjects.forEach((obj) => {
      obj.move();
      obj.draw();
    });
    if (updateFn) {
      updateFn();
    }
    window.requestAnimationFrame(() => {
      this.run(updateFn);
    });
  }
}
