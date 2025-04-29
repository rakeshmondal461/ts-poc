
// ------------Exercise:1----------

// Write a function calculateArea that:
// Takes two parameters: width and height, both numbers.
// Returns the area as a number.
// Bonus: Make height optional. If it's not provided, treat it like a square (height = width).



function calculateArea(width: number, height?: number): number {
  if (!height) height = width;
  return width * height;
}

let area = calculateArea(5, 4);
console.log("area", area);

//Create a type alias StringTransformer for a function that takes a string and returns a string.

type StringTransformer = (a: string) => string;

let toTitleCase: StringTransformer = (str) => {
  let strArr = str.toLowerCase().split(" ");

  let newArr = strArr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return newArr.join(" ");
};

const capt = toTitleCase("hello world");

console.log("capt",capt)
