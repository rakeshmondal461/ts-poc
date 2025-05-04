export interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

export interface Employee extends Person {
  employeeId: string;
  department: string;
}

export function getEmployeeSummary(emp: Employee): string {
  return `${emp.firstName} ${emp.lastName} (ID: ${emp.employeeId}) works in ${emp.department} at age ${emp.age}.`;
}

const newEmploye: Employee = {
  firstName: "Rakesh",
  lastName: "Mondal",
  age: 30,
  employeeId: "EMP123",
  department: "Engineering",
};

console.log(getEmployeeSummary(newEmploye));
