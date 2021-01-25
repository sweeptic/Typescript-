console.log('hello again...');

/* LET CONST */
// const userName = 'A';
// userName = 'Attila';

// var age = 33;

// const add = (a: number, b: number) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

/*ARROW FUNCTION*/
// const add = (a: number, b: number) => a + b;
const add: (a: number, b: number) => number = (a, b) => a + b;

// const printOutput = (output: number | string) => console.log(output);
const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}

/*DEFAULT FUNCTION PARAMETER*/

const add2 = (a: number, b: number = 1) => a + b;
// const add2: (a: number, b: number ) => number = (a, b = 1) => a + b; ??
// console.log(add2(3));

/* THE SPREAD OPERATOR*/
const hobbies = ['sport', 'cooking'];
const hobbies2 = ['hiking', ...hobbies];

// hobbies.push(...hobbies2);

// console.log(hobbies2);

const person = {
  firstName: 'Attila',
  age: 11,
};

const copiedPerson = { ...person };

// console.log(copiedPerson);

/*REST PARAMETERS*/

const add3 = (...args: number[]) => {
  //   console.log(...args);
};

const addedNumbers = add3(4, 4, 2, 5, 6, 3.5);

// console.log(addedNumbers);

/*ARRAY OBJECT DESTRUCTURING*/
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobby1, hobby2, hobbies);

const { firstName: userName, age } = person;

console.log(userName, age, person);
