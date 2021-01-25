//typescript object notation
// const person: { name: string; age: number } = {
//   name: 'Attila',
//   age: 42,
// };

//typescript object notation
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Attila',
//   age: 42,
//   //type inference
//   hobbies: ['Sports', 'Cooking'],
//   //ts inference
//   role: [2, 'author'],
// };

//allowed
// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

// const ADMIN = 0;
// const READ_ONLY = 1;

enum Role {
  ADMIN = 5,
  READ_ONLY = 100,
  AUTHOR = 200,
}

const person = {
  name: 'Attila',
  age: 42,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log('admin');
}

let favoriteActivities: any[];
favoriteActivities = ['Sports', 2, true];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map());
}

//Tupple: // fix length and fix type
