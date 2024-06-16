type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === 'square') {
    return shape.sideLength ** 2;
  } else {
    assertNever(shape);
  }
}

function assertNever(val: never) {
  throw new Error(`this value should not exist!! ${val}`);
}