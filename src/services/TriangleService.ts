import { Triangle, TriangleType } from "../entities/Triangle";

export class TriangleService {
  private static d(p1: { x: number; y: number }, p2: { x: number; y: number }): number {
    return Math.hypot(p1.x - p2.x, p1.y - p2.y);
  }

  static perimeter(t: Triangle): number {
    return this.d(t.a, t.b) + this.d(t.b, t.c) + this.d(t.c, t.a);
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
    const ab = this.d(t.a, t.b);
    const bc = this.d(t.b, t.c);
    const ca = this.d(t.c, t.a);
    return Math.abs(ab - bc) < 1e-6 && Math.abs(bc - ca) < 1e-6;
  }

  static isIsosceles(t: Triangle): boolean {
    const ab = this.d(t.a, t.b);
    const bc = this.d(t.b, t.c);
    const ca = this.d(t.c, t.a);
    return (
      Math.abs(ab - bc) < 1e-6 ||
      Math.abs(bc - ca) < 1e-6 ||
      Math.abs(ca - ab) < 1e-6
    );
  }

  static isRightAngled(t: Triangle): boolean {
    const ab2 = Math.pow(this.d(t.a, t.b), 2);
    const bc2 = Math.pow(this.d(t.b, t.c), 2);
    const ca2 = Math.pow(this.d(t.c, t.a), 2);
    const sides = [ab2, bc2, ca2].sort((a, b) => a - b);
    return Math.abs(sides[0] + sides[1] - sides[2]) < 1e-6;
  }

  static detectType(t: Triangle): TriangleType {
    const isEquilateral = this.isEquilateral(t);
    const isIsosceles = this.isIsosceles(t);
    const isRight = this.isRightAngled(t);

    if (isEquilateral) return "equilateral";
    if (isRight && isIsosceles) return "right isosceles";
    if (isRight) return "right";
    if (isIsosceles) return "isosceles";
    return "scalene";
  }
}
