import { Triangle } from "../src/entities/Triangle";
import { Point } from "../src/entities/Point";
import { TriangleService } from "../src/services/TriangleService";

describe("TriangleService", () => {
  test("given valid triangle, when calculating area, then correct result", () => {
    const t = new Triangle("T1", new Point(0, 0), new Point(4, 0), new Point(0, 3));
    const area = TriangleService.area(t);
    expect(area).toBeCloseTo(6);
    expect(area).toBeGreaterThan(0);
  });

  test("given triangle, when checking if equilateral, then false", () => {
    const t = new Triangle("T2", new Point(0, 0), new Point(4, 0), new Point(0, 3));
    expect(TriangleService.isEquilateral(t)).toBe(false);
  });
});
