// ------------- Challenge 3 (Unwrap Promise) ------------------- //

function fetchUserInfo() {
    return Promise.resolve({
      id: 1,
      name: "Rakesh",
      email: "rakesh@example.com",
      isAdmin: false,
    });
  }
  
  type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
  
  type RawReturn = ReturnType<typeof fetchUserInfo>;
  type UserData = UnwrapPromise<RawReturn>;
  
  const user: UserData = {
    id: 1,
    name: "Rakesh",
    email: "rakesh@example.com",
    isAdmin: false,
  };
  
  console.log("User Info:", user);
  