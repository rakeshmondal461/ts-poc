export type Product = {
  id: string;
  name: string;
  price: number;
  tags: string[];
  discounted?: boolean;
};

export function logProductInfo(product: Product): void {
  console.log(`Product: ${product.id}`);
  console.log(`Price: ₹${product.price}`);
  console.log(`tags: ${product.tags.join(",")}`);
  console.log(`discounted: ${product.discounted ? "Yes" : "No"}`);
}

const obj: Product = {
  id: "dfsdfds",
  name: "Phone (ID: p123)",
  price: 9999,
  tags: ["Electronics", "Mobile"],
  discounted: false,
};

logProductInfo(obj);
