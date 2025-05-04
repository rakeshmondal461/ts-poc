/*

// ---------------- Partial Utility Types --------------------- //

type User = {
  id: number;
  name: string;
  email: string;
};

type PartialUser = Partial<User>;

const updateUser = (id: number, updates: PartialUser) => {
  console.log(id, updates);
};

updateUser(1, { name: "Rakesh" }); // ✅ Only name is enough

// ---------------- Partial Utility Types --------------------- //

type UserProfile = {
  name: string;
  age: number;
  email: string;
};

const defaultProfile: UserProfile = {
  name: "Anonymous",
  age: 0,
  email: "unknown@example.com",
};

function mergeProfile(profile: Partial<UserProfile>): UserProfile {
  return { ...defaultProfile, ...profile };
}

const updatedone = mergeProfile({ name: "Rakesh" });
console.log(updatedone);
// Output: { name: "Rakesh", age: 0, email: "unknown@example.com" }


// ---------------- Partial Utility Types (Exercise 2) --------------------- //

type UserProfile = {
  name: string;
  age: number;
  email: string;
};

const users: UserProfile[] = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 30, email: "bob@example.com" },
  { name: "Charlie", age: 28, email: "charlie@example.com" },
];


function bulkUpdateUsers(
  users: UserProfile[],
  userData: Partial<UserProfile>
): UserProfile[] {
  return users.map((item: UserProfile) => {
    return { ...item, ...userData };
  });
}

const updatedUsers = bulkUpdateUsers(users, { age: 35 });
console.log(updatedUsers);

// ---------------- Partial Utility Types (Exercise 2) --------------------- //


// ---------------- Partial Utility Types (Exercise 3) --------------------- //
type UserProfile = {
  name: string;
  age: number;
  email: string;
};

const users: UserProfile[] = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 30, email: "bob@example.com" },
  { name: "Charlie", age: 28, email: "charlie@example.com" },
];

// ❓ Only update users older than 26
const updatedUsers = bulkConditionalUpdateUsers(
  users,
  (user) => user.age > 26,
  { email: "updated@example.com" }
);

console.log(updatedUsers);

// 🔧 Your challenge: write this!
function bulkConditionalUpdateUsers(
  users: UserProfile[],
  conditionFn: (user: UserProfile) => boolean,
  updates: Partial<UserProfile>
): UserProfile[] {
  const filteredUser = users.map((user: UserProfile) =>
    conditionFn(user) ? { ...user, ...updates } : user
  );
  return filteredUser;
}
// ---------------- Partial Utility Types (Exercise 3) --------------------- //



// ---------------- Pick Utility Types (Exercise 1) --------------------- //
type UserProfile = {
  name: string;
  age: number;
  email: string;
  isAdmin: boolean;
};

const user: UserProfile = {
  name: "Rakesh",
  age: 29,
  email: "rakesh@example.com",
  isAdmin: false,
};

function getPublicProfile(user: Pick<UserProfile, "name" | "email">) {
  const publicUser: Pick<UserProfile, "name" | "email"> = {
    name: user.name,
    email: user.email,
  };
  return publicUser;
}

const publicProfile = getPublicProfile(user);
console.log("publicProfile", publicProfile);

// ---------------- Pick Utility Types (Exercise 1) --------------------- //



// ---------------- Pick Utility Types (Exercise 2) --------------------- //

type UserProfile = {
  name: string;
  age: number;
  email: string;
  address: string;
  phone: string;
};

const user: UserProfile = {
  name: "Rakesh",
  age: 30,
  email: "rakesh@example.com",
  address: "123 Street, Bangalore",
  phone: "123-456-7890",
};

function selectFields<T, K extends keyof T>(
    obj: T,
    keys: readonly K[]
  ): Pick<T, K> {
    const result = {} as Pick<T, K>;
    keys.forEach((key) => {
      result[key] = obj[key];
    });
    return result;
  }

const publicUser = selectFields(user, ["name", "email"]);
console.log(publicUser);
// Expected Output:
// { name: "Rakesh", email: "rakesh@example.com" }

*/
