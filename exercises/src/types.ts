type Pasta = string | number;

let carbonara: Pasta = 'creamy yolk + parmesan';

type Door = string;

let bigDoor: Door = carbonara;

console.log(bigDoor);

type Painting = {
  title: string;
  year: number;
}

let coolPainting = {title: 'moonlit journey', year: 1999, likes: 1000000};

let examplePainting: Painting = coolPainting;

console.log(examplePainting.likes); // property likes does not exist on type Painting