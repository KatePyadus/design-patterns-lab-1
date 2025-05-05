import { Triangle } from "../entities/Triangle";

export class TriangleService {
  static perimeter(t: Triangle): number {
    const d = (p1: any, p2: any) => Math.hypot(p1.x - p2.x, p1.y - p2.y);
    return d(t.a, t.b) + d(t.b, t.c) + d(t.c, t.a);
  }

  static area(t: Triangle): number {
    const { a, b, c } = t;
    return Math.abs(
      (a.x * (b.y - c.y) +
       b.x * (c.y - a.y) +
       c.x * (a.y - b.y)) / 2
    );
  }

  static isEquilateral(t: Triangle): boolean {
    const d = (p1: any, p2: any) => Math.hypot(p1.x - p2.x, p1.y - p2.y);
    const ab = d(t.a, t.b), bc = d(t.b, t.c), ca = d(t.c, t.a);
    return Math.abs(ab - bc) < 1e-6 && Math.abs(bc - ca) < 1e-6;
  }
}
