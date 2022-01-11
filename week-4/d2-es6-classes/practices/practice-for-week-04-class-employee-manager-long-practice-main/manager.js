const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, title, salary, boss, employees = []) {
        super(name, title, salary, boss)
        this.employees;
        this.addEmployee;

    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    bonus(multiplier) {
        return this.salary + (this.employees.forEach((function(employee){
            let totalEmpSalary = 0;
            totalEmpSalary += employee.salary;
        })) * multiplier)
    }
}
let annie = new Manager('Annie', 100000, 'Director')
let alvy = new Employee('Alvy', 75000, 'Analyst', annie)

console.log(annie)
console.log(alvy)

module.exports =  Manager
