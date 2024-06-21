type Lamp = {
  bulb: string;
  readonly watts: number;
  on: boolean;
}

let myLamp = {bulb: 'power saver', watts: 90, on: true};

console.log(myLamp.watts = 20);