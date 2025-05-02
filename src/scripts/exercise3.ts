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

*/

function mergeArray<A>(arr1:A[], arr2:A[]):A[]{
  return Array.from(new Set([...arr1,...arr2]))
}


const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const mergedArray = mergeArray(arr1, arr2);

console.log("mergedArray✅✅",mergedArray);