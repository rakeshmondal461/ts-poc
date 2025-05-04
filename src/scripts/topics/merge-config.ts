function mergeConfig<U, V>(obj1: U, obj2: V): U & V {
    return { ...obj1, ...obj2 };
  }
  
  const defaultConfig = {
    theme: "light",
    fontSize: "16px",
    language: "English",
  };
  
  const userConfig = {
    theme: "dark",
    language: "Spanish",
  };
  
  const finalConfig = mergeConfig(defaultConfig, userConfig);
  console.log(finalConfig);
  