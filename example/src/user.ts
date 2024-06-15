interface User {
    [key: number]: string;
  }
  
  const obj: User = {
    1: "Jane",
    2: "30",
    3: "female",
  };

  console.log(Array.isArray(obj));
  
  // console.log(Object.keys(obj).every((key) => typeof key === "number"));