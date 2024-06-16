"use strict";
function test(val) {
    val && console.log('im a real string! ', val);
}
test('hello');
test(undefined);
