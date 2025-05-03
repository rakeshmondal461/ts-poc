// ------------------- Discriminated Union ------------------ //
/*
type FormField =
  | { type: "text"; value: string }
  | { type: "checkbox"; value: boolean }
  | { type: "select"; value: string; options: string[] };

function processField(field: FormField): void {
  if (field.type === "text") {
    console.log(`Text value is: ${field.value}`);
  } else if (field.type === "checkbox") {
    console.log(`Checked: ${field.value}`);
  } else if (field.type === "select") {
    console.log(`Selected: ${field.value} from [${field.options.join(",")}]`);
  }
}

// ------------------- Discriminated Union ------------------ //

const defaultSettings = {
  theme: "light",
  notifications: true,
};

const userSettings = {
  theme: "dark",
  fontSize: "medium",
};

function mergeSettings<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const finalSettings = mergeSettings(defaultSettings, userSettings);



const defaultConfig = {
  theme: "light",
  fontSize: "16px",
  language: "English",
};

const userConfig = {
  theme: "dark",
  language: "Spanish",
};

function mergeConfig<U, V>(obj1: U, obj2: V): U & V {
  return { ...obj1, ...obj2 };
}

const finalConfig = mergeConfig(defaultConfig, userConfig);


console.log("finalConfig✅✅",finalConfig);



function mergeArray<A>(arr1:A[], arr2:A[]):A[]{
  return Array.from(new Set([...arr1,...arr2]))
}


const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const mergedArray = mergeArray(arr1, arr2);

console.log("mergedArray✅✅",mergedArray);



const users1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const users2 = [
  { id: 2, name: "Robert" },
  { id: 3, name: "Charlie" },
];

function mergeUniqueBy<T, K extends keyof T>(
  arr1: T[],
  arr2: T[],
  key: K
): T[] {
  const seen = new Set<T[K]>();
  const result: T[] = [];
  for (const item of [...arr1, ...arr2]) {
    if (!seen.has(item[key])) {
      seen.add(item[key]);
      result.push(item);
    }
  }
  return result;
}

const merged = mergeUniqueBy(users1, users2, "id");

console.log(merged);


const obj1 = { name: "Rakesh" };
const obj2 = { age: 30 };

const merged = mergeObjects(obj1, obj2);
// merged should be: { name: "Rakesh", age: 30 }

function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}


console.log(merged);


const config = {
  host: "localhost",
  port: 8080,
  debug: true,
};

function readConfig<T, K extends keyof T>(config: T, key: K): T[K] {
  return config[key];
}

const host = readConfig(config, "host"); // ✅ type: string
const port = readConfig(config, "port"); // ✅ type: number
const debug = readConfig(config, "debug"); // ✅ type: boolean

// ❌ Invalid usage (should throw TypeScript error)
// const version = readConfig(config, "version"); // Error

console.log(host);
console.log(port);
console.log(debug);
console.log(debug);

*/

// ------------------------- Updating a Property with Type Safety -------------------------- //

type Config = {
  host: string;
  port: number;
  debug: boolean;
};

function updateConfig<T, K extends keyof T>(obj: T, key: K, val: T[K]): T {
  return { ...obj, [key]: val };
}

const config: Config = {
  host: "localhost",
  port: 8080,
  debug: true,
};

const updated = updateConfig(config, "port", 8005);
console.log(updated);
