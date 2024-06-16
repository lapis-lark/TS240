type Device = {
  manufacturer: string;
  model: string;
  year: number;
}

let computer: Device = {manufacturer: 'panasonic', model: 'YUI-678', year: 1999};
let sumaho: Device = {manufacturer: 'mitsubishi', model: 'BRS-091', year: 2099};

let devices: Device[] = [computer, sumaho];

console.log(devices);