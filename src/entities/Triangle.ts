import { Point } from "./Point";
import { Shape } from "./Shape";

export class Triangle extends Shape {
  constructor(
    id: string,
    public readonly a: Point,
    public readonly b: Point,
    public readonly c: Point
  ) {
    super(id);
  }
}
