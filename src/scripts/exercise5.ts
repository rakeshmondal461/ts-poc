/*

type FormDraft = {
  fullName?: string;
  age?: number;
  email?: string;
};

function saveDraft(data: FormDraft) {
  console.log("Draft saved:", data);
}

// ✅ TODO: Write this function
function submitForm(data: Required<FormDraft>) {
  console.log("Form submitted!", data);
}

submitForm({ fullName: "Rakesh Mondal", age: 33, email: "abc@gmail.com" });

saveDraft({});

// -------------  Readonly Utility Types(Make object properties immutable) ------------- //

type Settings = {
  theme: string;
  darkMode: boolean;
};

const appSettings: Readonly<Settings> = {
  theme: "light",
  darkMode: false,
};

// ❌ Error: Cannot assign to 'theme' because it is a read-only property
// appSettings.theme = "dark";

// -------------  Readonly Utility Types(Make object properties immutable) ------------- //

// -------------  Omit Utility Types(Make object properties immutable) ------------- //

type User = {
  id: string;
  name: string;
  password: string;
};

type SafeUser = Omit<User, "password">;

const safeuser: SafeUser = {
  id: "123",
  name: "Rakesh",
  // ❌ password is not allowed here
};

// -------------  Omit Utility Types(Make object properties immutable) ------------- //

// Define a Record for product categories and their discounts
type Category = "electronics" | "clothing" | "groceries";

// 📝 Create a type using Record and assign discount percentages (number)

type discountPercentages = Record<Category, number>;

const productDiscounts: discountPercentages = {
  electronics: 25.5,
  clothing: 12,
  groceries: 25,
};

console.log("productDiscounts@@>>>", productDiscounts);

*/


type Status = "success" | "error" | "loading" | "idle";

// ✅ Use Exclude to remove "idle" and "loading" from Status
type ActiveStatus = Exclude<Status, "loading" | "idle">;

// Output: "success" | "error"


type FeatureFlags = "beta" | "darkMode" | "notifications" | "deprecatedFeature";

type ActiveFeatureFlags = Exclude<FeatureFlags, "deprecatedFeature">;


