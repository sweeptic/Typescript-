"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
    return;
}
printResult(add(5, 12));
function addHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combineValues;
addHandle(10, 20, function (result) {
    console.log(result);
    return result;
});
combineValues = add;
console.log(combineValues(8, 8));
