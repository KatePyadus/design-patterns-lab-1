import { Triangle } from "../entities/Triangle";
import { Sphere } from "../entities/Sphere";
import { Point } from "../entities/Point";

export class ShapeFactory {
  static createTriangle(id: string, data: string): Triangle | null {
    const parts = data.trim().split(/\s+/).map(Number);
    if (parts.length !== 6 || parts.some(isNaN)) return null;
    const [x1, y1, x2, y2, x3, y3] = parts;
    const a = new Point(x1, y1);
    const b = new Point(x2, y2);
    const c = new Point(x3, y3);
    return new Triangle(id, a, b, c);
  }

  static createSphere(id: string, data: string): Sphere | null {
    const parts = data.trim().split(/\s+/).map(Number);
    if (parts.length !== 3 || parts.some(isNaN)) return null;
    const [x, y, r] = parts;
    if (r <= 0) return null; // Проверка на отрицательный радиус
    const center = new Point(x, y);
    return new Sphere(id, center, r);
  }
}
