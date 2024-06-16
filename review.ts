// review merging with spread syntax, how it handles multiple properties of the same name
// this example (line 17) would imply that the values of later objects end as the final value?

type ApiConfig = {
    page: number;
    pageSize: number;
    sort: "asc" | "desc";
  };
  
  const defaultConfig: ApiConfig = {
    page: 1,
    pageSize: 10,
    sort: "asc",
  };
  
  async function fetchUsers(config: Partial<ApiConfig> = {}): Promise<void> {
    const finalConfig = { ...defaultConfig, ...config };
  
    const response = await fetch(
      `/api/users?page=${finalConfig.page}&pageSize=${finalConfig.pageSize}&sort=${finalConfig.sort}`
    );
    const data = await response.json();
  
    console.log(data);
  }
  
  // Fetch users with default config
  fetchUsers();
  
  // Fetch users with custom config
  fetchUsers({ page: 2, sort: "desc" });


  // review the is keyword--mainly used in return values? 
  // tells TS more information for future narrowing. . .
  function isStringArray(arr: unknown[]): arr is string[] {
    return arr.every((item) => typeof item === "string");
  }
  
  console.log(isStringArray([1, 2, 3]));
  console.log(isStringArray(["test", "string"]));

  // be able to define discriminated unions
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
    } else {
      return shape.sideLength ** 2;
    }
  }
  
  console.log(getArea({ kind: "circle", radius: 10 }));
  console.log(getArea({ kind: "square", sideLength: 10 }));