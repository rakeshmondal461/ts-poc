export type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "rectangle"; width: number; height: number };

export function calculateArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * (shape.radius * shape.radius);
  } else if (shape.kind === "rectangle") {
    return shape.height * shape.width;
  } else if (shape.kind === "square") {
    return shape.side * shape.side;
  } else {
    return 0;
  }
}
