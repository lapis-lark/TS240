function logUnknown(val: unknown): void {
  if (typeof val === 'string') {
    console.log(val);
  }
}

logUnknown(5);
logUnknown('spooooky');