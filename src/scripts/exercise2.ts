/*
 Mini Challenge 5:
Create an interface called Person with firstName, lastName, and age.
Create another interface Employee that extends Person, and adds employeeId and department.
Write a function getEmployeeSummary(emp: Employee): string that returns something like:
Rakesh Mondal (ID: EMP123) works in Engineering at age 30.



interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

interface Employee extends Person {
  employeeId: string;
  department: string;
}

function getEmployeeSummary(emp: Employee): string {
  return `${emp.firstName} ${emp.lastName} (ID: ${emp.employeeId}) works in ${emp.department} at age ${emp.age}.`;
}

let newEmploye: Employee = {
  firstName: "Rakesh",
  lastName: "Mondal",
  age: 30,
  employeeId: "EMP123",
  department: "Engineering",
};


console.log(getEmployeeSummary(newEmploye));



// ------------------ USE CASE OF UNION ------------------ //

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "rectangle"; width: number; height: number };

function calculateArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * (shape.radius * shape.radius);
  } else if (shape.kind === "rectangle") {
    return shape.height * shape.width;
  } else if (shape.kind === "square") {
    return shape.side * shape.side;
  } else {
    return 0;
  }
}

// ------------------ USE CASE OF UNION ------------------ //


// ------------------ USE CASE OF GENERIC FUNCTION ------------------ //

// Mini Challenge 7 (Generics):
// ✅ Task 1:
// Create a generic function wrapInArray<T>(value: T): T[]
// It should take any value and return it inside an array.

function wrapInArray<T>(value: T): T[] {
  return [value];
}

console.log(wrapInArray("hi")); // ["hi"]
console.log(wrapInArray(10)); // [10]
console.log(wrapInArray(true)); // [true]


function getFirstElement<T>(arr: T[]): T | undefined {
  if (Array.isArray(arr) && arr.length > 0) {
    return arr[0];
  }
  return undefined;
}

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
console.log(getFirstElement([]));

// ------------------ USE CASE OF GENERIC FUNCTION ------------------ //

*/
