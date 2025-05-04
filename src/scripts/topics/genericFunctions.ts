export function wrapInArray<T>(value: T): T[] {
  return [value];
}

console.log(wrapInArray("hi")); // ["hi"]
console.log(wrapInArray(10)); // [10]
console.log(wrapInArray(true)); // [true]

export function getFirstElement<T>(arr: T[]): T | undefined {
  if (Array.isArray(arr) && arr.length > 0) {
    return arr[0];
  }
  return undefined;
}

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
console.log(getFirstElement([]));
