class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstname;
    this.lastName = lastName;
    this.age = age;
    introduce();


  }
  // instance methods
  introduce () {
    console.log(`Hi I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }

  static introducePeople (...persons) {
    console.log()
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
