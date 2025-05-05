// -------------  ReturnType Utility Types ------------- //

function getUser() {
    return {
      id: 1,
      name: "Rakesh",
      isAdmin: true,
    };
  }
  
  type UserType = ReturnType<typeof getUser>;
  
  const user: UserType = {
    id: 1,
    name: "Rakesh",
    isAdmin: true,
  };
  