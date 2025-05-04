export function calculateArea(width: number, height?: number): number {
  if (!height) height = width;
  return width * height;
}

const area = calculateArea(5, 4);
console.log("area", area);
