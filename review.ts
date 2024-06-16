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