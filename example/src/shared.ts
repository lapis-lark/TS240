interface Shape {
    color: string;

}

interface Rectangle extends Shape {
    length: number;
    width: number;
  }
  
  interface Circle extends Shape {
    radius: number;
  }

function displayShape(shape: Shape) {
    console.log(`this shape is ${shape.color}`);
}