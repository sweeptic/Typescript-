// type Person = {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// };

// type AddFn = (a: number, b: number) => number;
// let add3: AddFn;

// add3 = (n1: number, n2: number) => {
//   return n1 + n2;
// };

interface AddFn {
  (a: number, b: number): number;
}

let add35: AddFn;

add35 = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string; //optional properties
  outputName?: string; //optional parameter
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string; //optional properties
  age = 30;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + '' + this.name);
    } else {
      console.log('hi');
    }
  }
}

/**/
/**/
/**/
let user1: Greetable;

user1 = new Person('Max');
// user1.name = 'Manuel'; //readonly!

// user1 = {
//   name: 'Max',
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + '' + this.name);
//   },
// };

console.log(user1);

user1.greet('Hi my name is ');
