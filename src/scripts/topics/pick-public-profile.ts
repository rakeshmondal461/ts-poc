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