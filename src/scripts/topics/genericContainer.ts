export interface Container<T> {
  content: T;
}

const item1: Container<string> = {
  content: "Biryani",
};

const packet: Container<number> = {
  content: 2,
};

export function printLength<T extends { length: number }>(item: T): void {
  console.log("item length", item.length);
}

printLength("Hello");
printLength(["Pepsi", "CocaCola"]);
