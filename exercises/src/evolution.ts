interface Human {
  name: string;
  age: number;
}

interface Staff extends Human {
  employeeID: number;
}

let mark: Staff = {name: 'mark barkins', age: 50, employeeID: 79000};

console.log(mark);