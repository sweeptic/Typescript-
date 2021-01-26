"use strict";
let add35;
add35 = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + '' + this.name);
        }
        else {
            console.log('hi');
        }
    }
}
let user1;
user1 = new Person('Max');
console.log(user1);
user1.greet('Hi my name is ');
