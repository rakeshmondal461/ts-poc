// ----------------------- Awaited Utility Type ---------------------------------- //

async function fetchUser() {
    return { name: "Rakesh", age: 33 };
  }
  
  type FetchedUser = Awaited<ReturnType<typeof fetchUser>>;
  
  
  // ---------------- Another Awaited example ---------------- //
  
  async function fetchUserProfile(): Promise<{
    id: number;
    name: string;
    email: string;
  }> {
    return {
      id: 1,
      name: "Rakesh",
      email: "rakesh@example.com",
    };
  }
  
  type UserType = Awaited<ReturnType<typeof fetchUserProfile>>;
  
  const ndata: UserType = {
    id: 1,
    name: "Rakesh",
    email: "rakesh@example.com",
  };
  