interface UserDataUltra {
  name: string;
  karma: number;
  moderator: boolean;
}

type UserDataKeys = keyof UserDataUltra;

function printUserProperty(user: UserDataUltra, key: UserDataKeys): void {
  console.log(user[key]);
}

let user: UserDataUltra = {name: 'claudia', karma: 90000, moderator: true};

printUserProperty(user, 'moderator');