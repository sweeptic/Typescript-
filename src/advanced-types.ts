/* intersection types*/
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee {}

//union types -> type check -> instanceOf in typeof
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

//function overloads
function add_2(a: number, b: number): number;
function add_2(a: string, b: string): string;
function add_2(a: number, b: string): string;
function add_2(a: string, b: number): string;
/*typeof type guards */
function add_2(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add_2('asd', 'ef');
result.split(' ');

// optional chaining
const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company' },
};

// nullish coalescing

// console.log(fetchedUserData.job && fetchedUserData.job.title);
//equal to
console.log(fetchedUserData?.job?.title);

const userInput = null;

// ? - null or undefined
const storedData = userInput ?? 'DEFAULT';

console.log(storedData);

type UnknownEmployee = Employee | Admin;

/*in type guards */
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Privileges: ' + emp.startDate);
  }
}

// printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Manuel', startDate: new Date() });

/*instanceof type guard*/

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }
  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //   if ('loadCargo' in vehicle) {
  //     vehicle.loadCargo(10000);
  //   }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(10000);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated unions

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}
interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving with speed' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

//type casting
// const paragraph = document.querySelector('p');
const paragraph = document.getElementById('message-output');
// #1 version
const userInputElement = <HTMLInputElement>(
  document.getElementById('user-input')
);
// #2 version
const userInputElement2 = document.getElementById(
  'user-input2'
)! as HTMLInputElement;
//! --never yield NULL

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}

userInputElement.value = 'Hi there';
userInputElement2.value = 'Hi there';

//index properties
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  userName: 'Must start with a capital character!',
};
