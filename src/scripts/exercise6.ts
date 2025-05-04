// -------------  ReturnType Utility Types ------------- //
/*
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
  

  // -------------  ReturnType Utility Types ------------- //


  // ------------- Challange 1 ------------------- //

  function createTheme() {
    return {
      colors: {
        primary: "#3498db",
        secondary: "#2ecc71",
      },
      fontSize: 16,
      darkMode: false,
    };
  }

  type themeType = ReturnType<typeof createTheme>

  const customTheme:themeType = {
    colors: {
        primary: "#3498db",
        secondary: "#2ecc71",
      },
      fontSize: 16,
      darkMode: false,
  }
  
  // ------------- Challange 1 ------------------- //

  // ------------- Challange 2 ------------------- //

  function fetchDashboardData() {
    return {
      stats: {
        users: 1000,
        active: 850,
      },
      notifications: ["Welcome!", "New update available"],
      isAdminView: true,
    };
  }

  type dashboardDataType = ReturnType<typeof fetchDashboardData>

  const dashboardData:dashboardDataType = {
    stats: {
        users: 1000,
        active: 850,
      },
      notifications: ["Welcome!", "New update available"],
      isAdminView: true,
  }

  console.log("dashboardData",dashboardData);
  // ❓ Define a type DashboardData using ReturnType
  // ❓ Create a variable `data` of type DashboardData and assign correct values

    // ------------- Challange 2 ------------------- //
*/
// ------------- Challange 3 ------------------- //

function fetchUserInfo() {
  return Promise.resolve({
    id: 1,
    name: "Rakesh",
    email: "rakesh@example.com",
    isAdmin: false,
  });
}

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type RawReturn = ReturnType<typeof fetchUserInfo>; // Promise<{...}>
type UserData = UnwrapPromise<RawReturn>; // Only the object

const user: UserData = {
  id: 1,
  name: "Rakesh",
  email: "rakesh@example.com",
  isAdmin: false,
};

console.log("User Info:", user);
