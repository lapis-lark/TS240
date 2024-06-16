function printId(val: number | string): string {
  if (typeof val === 'string') {
    return 'your value is a string';
  } else {
    return 'your value is a number';
  }
}