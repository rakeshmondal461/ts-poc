export type StringTransformer = (a: string) => string;

export const toTitleCase: StringTransformer = (str) => {
  let strArr = str.toLowerCase().split(" ");

  let newArr = strArr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return newArr.join(" ");
};

const capt = toTitleCase("hello world");
console.log("capt", capt);
