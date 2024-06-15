interface Animal {
    name: string;
    makeSound(): string;
}

interface Dog extends Animal {
    fetch(): string;
}

const myDog: Dog = {
    name: "Rex",
    makeSound: () => "Generic animal sound",
    fetch: () => "Rex fetches a stick.",
}

// types can also be extended

type numEntries = [key: number, value: string];
type numKeyArr = Array<numEntries>;

let example: numKeyArr = [[1, 'hi'], [4, 'howdy'], [6, 'osuuu'], [11, 'ya hou!']];

example.forEach(([key, value]) => {
    console.log(typeof key === 'number');
});