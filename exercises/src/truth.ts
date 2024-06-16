function isStringArray(arr: unknown[]): boolean {
  return arr.filter(ele => typeof ele === 'string').length === arr.length;
}

console.log(isStringArray([1, 2, 3])); // false
console.log(isStringArray(['a', 'b'])); // true