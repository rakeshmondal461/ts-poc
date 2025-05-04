// ---------------------- Extracts the tuple type of a function's parameters ----------------------------- //

function greet(name: string, age: number) {
    console.log(`Hello ${name}, age ${age}`);
  }
  
  type GreetParams = Parameters<typeof greet>;  
  // GreetParams = [name: string, age: number]
  

  const args: GreetParams = ["Rakesh", 33];
  greet(...args); // ✅

// ---------------------- Extracts the tuple type of a function's parameters ----------------------------- //


// ----------------------- Awaited Utility Type ---------------------------------- //

async function fetchUser() {
    return { name: "Rakesh", age: 33 };
  }
  
  type FetchedUser = Awaited<ReturnType<typeof fetchUser>>;

  // ----------------------- Awaited Utility Type ---------------------------------- //


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

  
  type userType = Awaited<ReturnType<typeof fetchUserProfile>>

  const ndata:userType = {
    id: 1,
      name: "Rakesh",
      email: "rakesh@example.com",
  }