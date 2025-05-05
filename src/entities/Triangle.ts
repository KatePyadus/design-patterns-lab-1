import { Point } from "./Point";
import { Shape } from "./Shape";

export type TriangleType = "equilateral" | "isosceles" | "right" | "right isosceles" | "scalene";

export class Triangle extends Shape {
  public triangleType?: TriangleType;

  constructor(
    id: string,
    public readonly a: Point,
    public readonly b: Point,
    public readonly c: Point
  ) {
    super(id);
  }
}
