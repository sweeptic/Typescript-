"use strict";
console.log('hello again...');
const add = (a, b) => a + b;
const printOutput = output => console.log(output);
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event));
}
const add2 = (a, b = 1) => a + b;
const hobbies = ['sport', 'cooking'];
const hobbies2 = ['hiking', ...hobbies];
const person = {
    firstName: 'Attila',
    age: 11,
};
const copiedPerson = Object.assign({}, person);
const add3 = (...args) => {
};
const addedNumbers = add3(4, 4, 2, 5, 6, 3.5);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2, hobbies);
const { firstName: userName, age } = person;
console.log(userName, age, person);
