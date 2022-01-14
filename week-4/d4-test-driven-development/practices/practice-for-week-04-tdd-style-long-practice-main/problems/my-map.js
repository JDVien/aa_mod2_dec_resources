function myMap(inputArray, callback) {
  let newArray = [];
  for (let index = 0; index < inputArray.length; index++) {
    const element = inputArray[index];
    newArray.push(callback(element));
  }
  return newArray;
}

const arr = [1, 2, 3];
const callback = (el) => el * 2;

console.log(myMap(arr, callback)); // prints [2,4,6]
console.log(arr); // prints [1,2,3]

module.exports = { myMap }
