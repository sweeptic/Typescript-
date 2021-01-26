/**/
abstract class Department {
  static fiscalYear = 2020;
  //   private id: string;
  //   private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    //  this.id = id;
    //  this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;
  //   {
  //     console.log(`Department (${this.id}): ${this.name}`);
  //   }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

/**/
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
  describe() {
    console.log('IT Department - ID: ', this.id);
  }
}

/**/
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReports(value: string) {
    if (!value) {
      throw new Error('please pass in a valid value! ');
    }
    this.addReport(value);
  }

  describe() {
    console.log('Accounting Department - ID: ', this.id);
  }

  addEmployee(name: string) {
    if (name === 'Max') return;
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReport() {
    console.log(this.reports);
  }
}

//static property and methods
const employee1 = Department.createEmployee('Static Max');
console.log(employee1, Department.fiscalYear);

/**/
/**/
/**/
const it = new ITDepartment('d1', ['Max']);
// accounting.employees[2] = 'Anna';
it.addEmployee('Max');
it.addEmployee('Min');
it.describe();
it.printEmployeeInformation();
console.log(it);

/**/
/**/
/**/
// const accounting = new AccountingDepartment('d2', []);

// singleton & private constructors
const accounting = AccountingDepartment.getInstance();

accounting.addReport('Secret report');
accounting.mostRecentReports = 'Year end report';
accounting.addEmployee('Max');
accounting.addEmployee('Manuel');
console.log(accounting);
console.log(accounting.mostRecentReport);
accounting.describe();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// console.log(accountingCopy);
// accountingCopy.describe();
