"use strict";
// merging interfaces
// redeclaring interfaces will actually merge new properties
let box = { height: 5, width: 6, scale: 10 };
const bear = getBear();
bear.name;
bear.honey;
const bear = getBear();
bear.name;
bear.honey;
