function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

let number1: number;
//type inference
const number2 = 2.8;
const printResult = true;
let resultPhase = 'Result is: ';

add(number1, number2, printResult, resultPhase);
