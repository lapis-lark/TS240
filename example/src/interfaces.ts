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