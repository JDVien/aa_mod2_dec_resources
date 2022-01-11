const FriendlyDragon = require('./classes/friendly-dragon')
const EvilDragon = require('./classes/evil-dragon')
const Dragon = require('./classes/dragon')

const falkor = new FriendlyDragon(
  'Falkor',
  'white',
  [
    "save Atreyu from the swamp",
    "save Atreyu from the Nothing",
    "scare the local bullies into a dumpster"
  ],
  "Bastian"
);
console.log(falkor);
console.log(falkor.breathesFire());
falkor.hasLifeGoals();
console.log(falkor.helpsPeople());

const smaug = new EvilDragon(
  'Smaug',
  'black',
  [
    "take over your mountain kingdom",
    "steal all your dwarven gold",
    "burn down your floating village"
  ],
  "Dwarf King"
);

console.log(smaug);
smaug.dontInviteThemOverForDinner();
console.log(smaug.breathesFire());
console.log(smaug.burnsNemesis());

const allDragons = Dragon.getDragons(falkor, smaug);
console.log(allDragons);

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = {
    falkor,
    smaug,
    allDragons
  };
} catch {
  module.exports = null;
}
