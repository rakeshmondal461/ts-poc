function readConfig<T, K extends keyof T>(config: T, key: K): T[K] {
    return config[key];
  }
  
  const config = {
    host: "localhost",
    port: 8080,
    debug: true,
  };
  
  const host = readConfig(config, "host");
  const port = readConfig(config, "port");
  const debug = readConfig(config, "debug");
  
  console.log(host, port, debug);
  