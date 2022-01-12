class Employee {
    constructor (name, occupation) {
        this.name = name;
        this.occupation = occupation;
    }
    sayName() {
        return console.log(`${this.name} says hello`);
    }

    sayOccupation() {
        return console.log(`${this.name} is a ${this.occupation}`);
    }
}

const emp = new Employee("Jason");
const nameSay = emp.sayName.bind(emp)
setTimeout(nameSay, 2000)

module.exports = Employee
