type Data = string | number;

function handleData(data: Data): void {
  switch (typeof data) {
    case 'string':
      console.log(data.toUpperCase);
      break;
    case 'number':
      console.log(data ** 3);
      break;
    default:
      const exhaustiveCheck: never = data;
      throw new Error(`invalid shape #{exhaustiveCheck}`);
  }
}