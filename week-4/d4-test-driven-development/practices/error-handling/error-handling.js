// // 1.
// function sum(array) {
//   let sum = 0;
//   if (array === null) {
//     throw new Error("sum cannot be null");
//   } else {
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
// }
//   return sum;
// }
// // let res = sum(null);
// try {
//   console.log(sum(null));
//   // console.log(sum([10, 2, 3]))
// } catch (error) {
//   console.log(error.name + ": " + error.message)
//  }
//  // finally {
// //   console.log()
// // }

// // console.log(sum);

//////////////////////////////////////////////////
// function sayName(name) {
//   if (typeof name !== 'string') {
//     throw new Error("Invalid name! Must be a string!")
//     console.log("This will not print")
//   } else {
//     console.log(name)
//   }
// }

// try {
//   sayName("Alex");
//   sayName(1);
// } catch (error) {
//   console.log(error.name + ": " + error.message)
//   console.log("This will print")
// }
// console.log("This will print")

// // // 2.
// // tests
// // sayName("Alex");
// // sayName(1);
// // Your code here

///////////////////////////////////////////////////////////////////

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

const hi = '';
// greet(hi);

try {
  greet(hi);
  console.log("This will not print")
} catch (error) {
  console.log(error.name + ": " + error.message)
  const realHi = "Hello World!"
  greet(realHi);
}
