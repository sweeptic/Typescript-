"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ', this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
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
    set mostRecentReports(value) {
        if (!value) {
            throw new Error('please pass in a valid value! ');
        }
        this.addReport(value);
    }
    describe() {
        console.log('Accounting Department - ID: ', this.id);
    }
    addEmployee(name) {
        if (name === 'Max')
            return;
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReport() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('Static Max');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Min');
it.describe();
it.printEmployeeInformation();
console.log(it);
const accounting = AccountingDepartment.getInstance();
accounting.addReport('Secret report');
accounting.mostRecentReports = 'Year end report';
accounting.addEmployee('Max');
accounting.addEmployee('Manuel');
console.log(accounting);
console.log(accounting.mostRecentReport);
accounting.describe();
