function mergeSettings<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }
  
  const defaultSettings = {
    theme: "light",
    notifications: true,
  };
  
  const userSettings = {
    theme: "dark",
    fontSize: "medium",
  };
  
  const finalSettings = mergeSettings(defaultSettings, userSettings);
  console.log(finalSettings);
  