import { Triangle } from "../entities/Triangle";

export class TriangleValidator {
  static isValidTriangle(t: Triangle): boolean {
    const { a, b, c } = t;
    return !((b.y - a.y) * (c.x - b.x) === (c.y - b.y) * (b.x - a.x));
  }
}
