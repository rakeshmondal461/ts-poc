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
  