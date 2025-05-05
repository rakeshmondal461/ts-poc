// ------------- Challenge 2 ------------------- //

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
  
  type DashboardData = ReturnType<typeof fetchDashboardData>;
  
  const dashboardData: DashboardData = {
    stats: {
      users: 1000,
      active: 850,
    },
    notifications: ["Welcome!", "New update available"],
    isAdminView: true,
  };
  
  console.log("dashboardData", dashboardData);
  