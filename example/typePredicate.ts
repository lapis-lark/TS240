type Vehicle = { make: string; model: string; year: number };
type Motorcycle = Vehicle & { type: "motorcycle" };
type Car = Vehicle & { type: "car"; doors: number };

function isCar(vehicle: Vehicle | Car | Motorcycle): vehicle is Car {
  return 'doors' in vehicle;
}

// Usage
let myCar: Car = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
  type: "car",
  doors: 4,
};

if (isCar(myCar)) {
  console.log(myCar.doors);
}

type Dog = {
  species: 'dog';
  name: string;
  age: number
}

type Bird = {
  species: 'bird';
  name: string;
  wingspan: number;
} 
/*

type Animal = Dog | Bird

function describeAnimal(animal: Animal): string {
  animal.species === 'dog' && console.log(`${animal.name} is ${animal.age} year(s) old`);
  animal.species === 'bird' && console.log(`${animal.name} has a wingspan of ${animal.wingspan}cm.`);

}
  */

type Elephant = {
  kind: "elephant";
  weight: number;
};

type Tiger = {
  kind: "tiger";
  speed: number;
};

type Peacock = {
  kind: "peacock";
  featherLength: number;
};

type Animal = Elephant | Tiger | Peacock;

function describeAnimal(animal: Animal) {
  switch (animal.kind) {
    case ('elephant'):
      console.log(`this elephant weighs ${animal.weight} pounds`);
      break;
    case ('tiger'):
      console.log(`this tiger runs at ${animal.speed}mph`)
      break;
    case ('peacock'):
      console.log(`it a peacock ${animal.featherLength}`);
      break;
    default:
      let x: never = animal;
      console.log(x);
  }
}

function isNumber(input: any): input is number {
  return typeof input === 'number';
}

function safeGet<T>(arr: T[], index: number) {
  if (index < arr.length && index >= 0) {
    return arr[index];
  } else {
    return undefined;
  }
}