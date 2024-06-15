interface CustomArray {
    [index: number]: string | number;
  }
  
  const customArray1: CustomArray = {
    1: "Jane",
    2: "30",
    3: "female",
  };

  const customArray2: CustomArray =  ["apple", 42, "banana"];
 
  // the same interface can support both objects and arrays. . . curious
  console.log(Array.isArray(customArray1)); // false
  console.log(Array.isArray(customArray2)); // true

  console.log(customArray2[2]);

  function processCustomArray(arr: CustomArray) {

    if (Array.isArray(arr)) { // necessary since it could be an object as above?
        return arr.filter(element => typeof element === 'string')
                  .map(element => element.toUpperCase());
    }
  }

  console.log(processCustomArray(customArray2));

  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K]{
    return obj[key];
  }
  
  const ob = {
    name: "John",
    age: 30,
  };
  
  const x = getProperty(ob, "name");
  const y = getProperty(ob, "age");

  