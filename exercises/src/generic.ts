function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

let boolArr = [true, false, false, true];

console.log(firstElement(boolArr));