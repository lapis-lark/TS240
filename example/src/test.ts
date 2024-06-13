function printName(obj: { first: string; last?: string }) {
  console.log(obj);
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
