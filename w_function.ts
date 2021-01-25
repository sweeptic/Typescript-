function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
  return;
}

printResult(add(5, 12));

function addHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// let someVal: undefined;

let combineValues: (a: number, b: number) => number;

addHandle(10, 20, result => {
  console.log(result);
  return result;
});

combineValues = add;
// combineValues = printResult;

console.log(combineValues(8, 8));
