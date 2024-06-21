function getProperty<T, K extends keyof T>(object: T, key: K) {
  
  return object[key];
}

interface Userr {
  name: string;
  age: number
}

interface Mailman {
  name: string;
  age: number
  active: boolean;
}

let timmy: Mailman = {name: 'timmy', age: 30, active: true};

let timmyUserr: Userr = timmy;

let jane: Userr = {name: 'jane', age: 29};

let janeMail: Mailman = jane;

console.log(JSON.stringify(timmyUserr));