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

*/
