"use strict";
function getArea(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    else {
        return shape.sideLength ** 2;
    }
}
console.log(getArea({ kind: 'circle', radius: 3 }));
console.log(getArea({ kind: 'square', sideLength: 4 }));
