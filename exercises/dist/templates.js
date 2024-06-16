"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return `${this.name} is ${this.age} years old.`;
    }
}
const person = new Person("Alice", 30);
console.log(person.describe());
// Expected Output:
// Alice is 30 years old.
