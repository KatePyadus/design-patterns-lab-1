import { Sphere } from "../src/entities/Sphere";
import { Point } from "../src/entities/Point";
import { SphereService } from "../src/services/SphereService";

describe("SphereService", () => {
  test("given valid sphere, when calculating surface area, then correct result", () => {
    const s = new Sphere("S1", new Point(0, 0), 3);
    const area = SphereService.surfaceArea(s);
    expect(area).toBeCloseTo(113.097);
    expect(area).toBeGreaterThan(0);
  });

  test("given valid sphere, when checking intersection with axes, then true", () => {
    const s = new Sphere("S2", new Point(2, 0), 3);
    expect(SphereService.intersectsAxis(s)).toBe(true);
  });
});
