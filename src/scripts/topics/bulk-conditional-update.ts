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
  
  const updatedUsers = bulkConditionalUpdateUsers(
    users,
    (user) => user.age > 26,
    { email: "updated@example.com" }
  );
  
  console.log(updatedUsers);
  
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