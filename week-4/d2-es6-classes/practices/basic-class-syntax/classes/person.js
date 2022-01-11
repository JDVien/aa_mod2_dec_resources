class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;


  };
  // instance methods
  introduce () {
    console.log(`Hi I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }

  static introducePeople (people) {
    if (!Array.isArray(people)) {
      console.log("introducePeople only takes an array as an argument.")
    // console.log(`error: introducePeople only takes an array as an argument`);
    return;
  }
    for (let person of people) {
      if (!(person instanceof Person)) {
        console.log("All items in array must be Person class instances");
        // console.log("All items in array must be instance of class Person");
        return;
      }
    }
    people.forEach((person) => person.introduce());

  }
}
// const jason = new Person('Jason', 'Vien', 29)
// const jeff = new Person('Jeff', 'Granof', 100)
// jason.introduce();
// jeff.introduce()
// const array = [jason, jeff]
// Person.introducePeople(array)
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
