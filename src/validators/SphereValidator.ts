import { Sphere } from "../entities/Sphere";

export class SphereValidator {
  static isValidSphere(s: Sphere): boolean {
    return s.radius > 0;
  }
}
