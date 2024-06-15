function calculate(operation: 'add' | 'subtract', a: number, b: number) {
    switch (operation) {
      case "add":
        return a + b;
      case "subtract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        return a / b;
      default:
        throw new Error("Invalid operation");
    }
  }