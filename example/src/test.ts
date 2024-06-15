function calculate(operation: 'add' | 'subtract' | 'multiply' | 'divide', a: number, b: number) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      throw new Error("Invalid operation");
  }
}

interface book {
  title: string;
  author: {
    firstName: string;
    lastName: string;
  }
  publicationDate: number; 
  genres: string[];
}

interface Point {
  readonly x: number;
  readonly y: number;
}

function movePoint(point: Point, dx: number, dy: number): Point {
  return {x: dx + point.x, y: dy + point.y};
}

interface Movable {
  speed: number;
  move(): void;
}

class Car implements Movable {
  speed: number;
  move: () => void;

  constructor(speed: number, move: () => void) {
    this.speed = speed;
    this.move = move;
  }
}

type input = string | number;

/*
function combine(a: input, b: input): input{
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return 'cannot be combined';
  }
}

function combined(a: input, b: input): input{
  if (typeof a === typeof b) {
    return a + b as input;
  } else {
    throw new Error('different types cannot be combined');
  }
}
*/

function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: input, b: input): input {
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    throw new Error(
      "Invalid input types: both inputs must be strings or both inputs must be numbers."
    );
  }
}


const concatenated: string = combine("Hello, ", "World!"); // Type 'string | number' is not assignable to type 'string'.
// Type 'number' is not assignable to type 'string'.

const added: number = combine(5, 10); // Type 'string | number' is not assignable to type 'string'.
// Type 'string' is not assignable to type 'number'.




