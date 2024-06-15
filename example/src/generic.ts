/*
type User<T> = {
  name: string;
  age: T;
}
*/

function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}