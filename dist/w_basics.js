"use strict";
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1;
var number2 = 2.8;
var printResult = true;
var resultPhase = 'Result is: ';
add(number1, number2, printResult, resultPhase);
