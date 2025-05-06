type Settings = {
  theme: string;
  darkMode: boolean;
};

const appSettings: Readonly<Settings> = {
  theme: "light",
  darkMode: false,
};

// appSettings.theme = "dark"; // ❌ Error: Cannot assign to 'theme' because it is a read-only property