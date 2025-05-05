// ------------- Challenge 1 ------------------- //

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
  
  type ThemeType = ReturnType<typeof createTheme>;
  
  const customTheme: ThemeType = {
    colors: {
      primary: "#3498db",
      secondary: "#2ecc71",
    },
    fontSize: 16,
    darkMode: false,
  };
  