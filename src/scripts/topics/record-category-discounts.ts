type Category = "electronics" | "clothing" | "groceries";

type DiscountPercentages = Record<Category, number>;

const productDiscounts: DiscountPercentages = {
  electronics: 25.5,
  clothing: 12,
  groceries: 25,
};

console.log("productDiscounts@@>>>", productDiscounts);