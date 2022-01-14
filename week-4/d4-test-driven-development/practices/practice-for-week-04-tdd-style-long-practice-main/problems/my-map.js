function myMap(inputArray, callback) {
  let newArray = [];
  for (let index = 0; index < inputArray.length; index++) {
    const element = inputArray[index];
    newArray.push(callback(element));
  }
  // I intentionally mutated the original array here so that we could test to make sure. run this in node, and then npm-test the spec
  inputArray.push(6)
  return inputArray, newArray; // I returned both the newArray and the inputArray so that in the spec, the test = [1,2,3] variable will fail the test case
}

const arr = [1, 2, 3];
const callback = (el) => el * 2;

console.log(myMap(arr, callback)); // prints [2,4,6]
console.log(arr); // prints [1,2,3]

module.exports = { myMap }
