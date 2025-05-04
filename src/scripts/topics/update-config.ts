type Config = {
    host: string;
    port: number;
    debug: boolean;
  };
  
  function updateConfig<T, K extends keyof T>(obj: T, key: K, val: T[K]): T {
    return { ...obj, [key]: val };
  }
  
  const uconfig: Config = {
    host: "localhost",
    port: 8080,
    debug: true,
  };
  
  const updated = updateConfig(uconfig, "port", 8005);
  console.log(updated);
  