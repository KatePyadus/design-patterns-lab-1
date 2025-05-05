import { Point } from "./Point";
import { Shape } from "./Shape";

export class Sphere extends Shape {
  constructor(
    id: string,
    public readonly center: Point,
    public readonly radius: number
  ) {
    super(id);
  }
}
