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

type dashboardDataType = ReturnType<typeof fetchDashboardData>;

const dashboardData: dashboardDataType = {
  stats: {
    users: 1000,
    active: 850,
  },
  notifications: ["Welcome!", "New update available"],
  isAdminView: true,
};

console.log("dashboardData", dashboardData);