type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

//the union types
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  //work both string and number
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(20, 30, 'as-number');
console.log(combinedAges);
