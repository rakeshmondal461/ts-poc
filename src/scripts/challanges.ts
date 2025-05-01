// Define a type alias for BlogPost
// Fields: id (string), title (string), content (string), tags (array of strings), published (boolean)

type Blog = {
  id: string;
  title: string;
  content: string;
  tags: string[];
  published: boolean;
};

let blog: Blog = {
  id: "b1",
  title: "Mastering TypeScript",
  content: "TypeScript makes JavaScript safer.",
  tags: ["typescript", "javascript", "frontend"],
  published: true,
};

// Define an interface for a UserProfile
// Fields: username (string), email (string), age (optional number), bio (optional string)

interface Iprofile {
  username: string;
  email: string;
  age?: number;
  bio?: string;
}

let profile: Iprofile = {
  username: "rakeshmondal",
  email: "rakesh@example.com",
};

// Create a union type PaymentMethod = "card" | "upi" | "cash"

type PaymentMethod = "card" | "upi" | "cash";

let payment: PaymentMethod = "upi";

// Define full types for the function (parameter + return type)

function calculateDiscount(price: number, discount: number): number {
  return price - price * discount;
}

// Create a generic interface ApiResponse<T>
// It has: success (boolean), data (T), message? (string)

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

let userResponse: ApiResponse<{
  id: number;
  name: "Rakesh";
}> = {
  success: true,
  data: {
    id: 101,
    name: "Rakesh",
  },
};
