type UserProfileN = {
    name: string;
    age: number;
    email: string;
  };
  
  const users: UserProfileN[] = [
    { name: "Alice", age: 25, email: "alice@example.com" },
    { name: "Bob", age: 30, email: "bob@example.com" },
    { name: "Charlie", age: 28, email: "charlie@example.com" },
  ];
  
  function bulkUpdateUsers(
    users: UserProfileN[],
    userData: Partial<UserProfileN>
  ): UserProfileN[] {
    return users.map((item: UserProfileN) => {
      return { ...item, ...userData };
    });
  }
  
  const updatedUsers = bulkUpdateUsers(users, { age: 35 });
  console.log(updatedUsers);