// ------------- Challenge 3 ------------------- //

function fetchUserInfo() {
  return Promise.resolve({
    id: 1,
    name: "Rakesh",
    email: "rakesh@example.com",
    isAdmin: false,
  });
}

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type RawReturn = ReturnType<typeof fetchUserInfo>; // Promise<{...}>
type UserData = UnwrapPromise<RawReturn>; // Only the object

const user: UserData = {
  id: 1,
  name: "Rakesh",
  email: "rakesh@example.com",
  isAdmin: false,
};

console.log("User Info:", user);