import fs from "fs";
import path from "path";
import { ShapeFactory } from "./factory/ShapeFactory";
import { TriangleValidator } from "./validators/TriangleValidator";
import { TriangleService } from "./services/TriangleService";
import { logger } from "./utils/logger";
import { Sphere } from "./entities/Sphere";
import { SphereValidator } from "./validators/SphereValidator";
import { SphereService } from "./services/SphereService";
import { Point } from "./entities/Point";

const triangleFilePath = path.join(__dirname, "..", "data", "triangles.txt");
const triangleLines = fs.readFileSync(triangleFilePath, "utf-8").split("\n");

triangleLines.forEach((line, index) => {
  const triangle = ShapeFactory.createTriangle("T" + (index + 1), line);
  if (!triangle) {
    logger.warn({ line }, "Invalid triangle input, skipping.");
    return;
  }

  if (!TriangleValidator.isValidTriangle(triangle)) {
    logger.warn({ triangle }, "Invalid triangle geometry.");
    return;
  }

  const area = TriangleService.area(triangle);
  const perimeter = TriangleService.perimeter(triangle);
  const type = TriangleService.detectType(triangle);
  triangle.triangleType = type;

  logger.info({ id: triangle.id, area, perimeter, type }, "Valid triangle.");
});

const sphereFilePath = path.join(__dirname, "..", "data", "spheres.txt");
const sphereLines = fs.readFileSync(sphereFilePath, "utf-8").split("\n");

sphereLines.forEach((line, index) => {
  const parts = line.trim().split(/\s+/).map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) {
    logger.warn({ line }, "Invalid sphere input, skipping.");
    return;
  }

  const [x, y, r] = parts;
  const sphere = new Sphere("S" + (index + 1), new Point(x, y), r);

  if (!SphereValidator.isValidSphere(sphere)) {
    logger.warn({ sphere }, "Invalid sphere geometry.");
    return;
  }

  const surfaceArea = SphereService.surfaceArea(sphere);
  const volume = SphereService.volume(sphere);
  const intersects = SphereService.intersectsAxis(sphere);

  logger.info({ id: sphere.id, surfaceArea, volume, intersects }, "Valid sphere.");
});
