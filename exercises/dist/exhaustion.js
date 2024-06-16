"use strict";
function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind === 'square') {
        return shape.sideLength ** 2;
    }
    else {
        assertNever(shape);
    }
}
function assertNever(val) {
    throw new Error(`this value should not exist!! ${val}`);
}
