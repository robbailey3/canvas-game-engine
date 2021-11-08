import { Vector } from "..";
 
export interface GameObject {
	position: Vector;
	velocity: Vector;
	move: () => void;
	draw: () => void;
}