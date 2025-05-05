import { Sphere } from "../entities/Sphere";

export class SphereService {
  static surfaceArea(s: Sphere): number {
    return 4 * Math.PI * s.radius * s.radius;
  }

  static volume(s: Sphere): number {
    return (4 / 3) * Math.PI * Math.pow(s.radius, 3);
  }

  static intersectsAxis(s: Sphere): boolean {
    const { x, y } = s.center;
    return Math.abs(x) <= s.radius || Math.abs(y) <= s.radius;
  }
}
