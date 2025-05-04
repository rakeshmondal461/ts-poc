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