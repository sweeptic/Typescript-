"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
console.log('hello again...');
var add = function (a, b) { return a + b; };
var printOutput = function (output) { return console.log(output); };
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function (event) { return console.log(event); });
}
var add2 = function (a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
};
var hobbies = ['sport', 'cooking'];
var hobbies2 = __spreadArrays(['hiking'], hobbies);
var person = {
    firstName: 'Attila',
    age: 11,
};
var copiedPerson = __assign({}, person);
var add3 = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
};
var addedNumbers = add3(4, 4, 2, 5, 6, 3.5);
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log(hobby1, hobby2, hobbies);
var userName = person.firstName, age = person.age;
console.log(userName, age, person);
