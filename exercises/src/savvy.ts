function test(val: string | undefined): void {
  val && console.log('im a real string! ', val);
}

test('hello');

test(undefined);