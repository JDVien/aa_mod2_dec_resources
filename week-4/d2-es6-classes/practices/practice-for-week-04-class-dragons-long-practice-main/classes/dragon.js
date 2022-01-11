
class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.breathesFire();
  }
  breathesFire () {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons (...dragons) {
    // const dragonArray = [];
    // dragonArray.push(dragons);
    // return dragonArray;

   return dragons.map(dragon => dragon.name) // also works
  }
}
module.exports = Dragon
// const puff = new Dragon("Puff", "green");
// console.log(puff);
// console.log(puff.breathesFire());

// const toothless = new Dragon("Toothless", "black");
// console.log(toothless);
// console.log(toothless.breathesFire());

const puff = new Dragon("Puff", "green");
const toothless = new Dragon("Toothless", "black");
console.log(Dragon.getDragons(puff, toothless));

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
