type ContactType = {
  firstName: string;
  lastName: string;
  age: number;
  isOnline: boolean;
}

let friend: ContactType = {
  firstName: 'jimmy',
  lastName: 'huffins',
  age: 66,
  isOnline: true,
};

console.log(friend.age);