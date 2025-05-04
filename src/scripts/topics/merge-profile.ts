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
  