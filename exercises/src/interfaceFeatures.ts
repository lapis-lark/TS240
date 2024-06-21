// merging interfaces
// redeclaring interfaces will actually merge new properties

interface Box {
  height: number;
  width: number;
}
interface Box {
  scale: number;
}
let box: Box = { height: 5, width: 6, scale: 10 };

// types cannot be changed after creation, a difference with interfaces
// they can be extended via intersection, however
// interfaces use the extends keyword in this case
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;
        
// with types
type Animal = {
  name: string;
}

type Bear = Animal & { 
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;