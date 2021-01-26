//generics
const names_2 = ['Max', 'Manuel'];
const names_3: any[] = [];

/**/
// const names_4: Array = []; // Generic type 'Array<T>' requires 1 type argument(s).
const names: Array<string> = [];

// names[0].split(' ');

//what is generics ?
//additional type information!
//store the type information of the incoming data
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000);
});

promise.then(data => {
  data.split(' '); //Promise<number> ->  Property 'split' does not exist on type 'number'.
});

//own generic types
//TWO different  types here
// T and U is any type, but T not equal U

//constraints   ->  <T extends object, U extends object>
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB); //return T and U intersection them
}

const mergedObj = merge({ name: 'max', hobbies: ['Sports'] }, { age: 30 });
const mergedObj_2 = merge({ name: 'max' }, { age: 30 });
//we known this exists. TS doesn't
console.log(mergedObj.age);

const mergedObj_3 = merge({ name: 'max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj_3);

interface Lengthy {
  length: number;
}

//another generic function
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 elements.';
  } else if (element.length > 1) {
    descriptionText = 'Got' + element.length + 'elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Hi there!']));
console.log(countAndDescribe([]));
//Argument of type 'number' is not assignable to parameter of type 'Lengthy'
// console.log(countAndDescribe(10));

//key of constraints

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'Max' }, 'name'));

//generic classes

//uniform data!!!
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1); //-1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('max');
textStorage.addItem('manu');
textStorage.removeItem('max');
console.log(textStorage.getItems());

//flexible and full type support
const numberStorage = new DataStorage<number>();

//object not allowed
// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'max' });
// objStorage.addItem({ name: 'manu' });
// // ...
// objStorage.removeItem({ name: 'manu' }); //work goes wrong
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names_5: Readonly<string[]> = ['Max', 'Sports'];
// names_5.push('Manuel');
// names_5.pop();
