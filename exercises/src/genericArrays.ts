function filterByType<T>(array: any[], type: string): T[] {
  return array.filter(ele => typeof ele === type);
}

console.log(filterByType<string>(["hello", "world", 42, true], "string"));