interface UserData {
  name: string;
  pass: string;
}

let jimmyData: UserData = {name: 'jimmy bobimmy', pass: 'takeout123'};

function getKeys<Type, Key extends keyof Type>(user: UserData) {
  
}