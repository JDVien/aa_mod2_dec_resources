// Merge Sort out-of-place
// Do not modify the original array

function mergeSort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return;

  let divider = arr.length / 2;
  // Divide the array in half
  let loHalf = arr.slice(0, divider);
  let hiHalf = arr.slice(divider);

  // Recursively sort the left half
  // let leftSorted = mergeSort(loHalf);
  // // Recursively sort the right half
  // let rightSorted = mergeSort(hiHalf);
  // Merge the halves together and return
  return merge(loHalf, hiHalf);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let newArray = [];
  // Point to the first value of each array

  // While there are still values in each array...
  while (arrA.length || arrB.length) {
    let firstValA = arrA[0];
    let firstValB = arrB[0];
    let smaller;
    if (!arrA.length) firstValA = Infinity;
    if (!arrB.length) firstValB = Infinity;
    // Compare the first values of each array
    if (firstValA < firstValB) {
      // Add the smaller value to the return array
      // Move the pointer to the next value in that array
      smaller = arrA.shift();
    } else {
      smaller = arrB.shift();
    }
    newArray.push(smaller)
  }
  // Return the return array
  return newArray;
}

module.exports = [merge, mergeSort];

// Kristen's Solution
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const midPoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midPoint);
  const right = arr.slice(midPoint, arr.length);
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

function merge(arrA, arrB) {
  const merge = [];
  let idxA = 0;
  let idxB = 0;

  while (idxA < arrA.length || idxB < arrB.length) {
    if (idxA === arrA.length) {
      merge.push(arrB[idxB]);
      idxB++;
    } else if (idxB === arrB.length) {
      merge.push(arrA[idxA])
      idxA++;
    } else if (arrA[idxA] < arr[idxB]) {
      merge.push(arrA[idxA])
      idxA++;
    } else if (arrB[idxB] < arrA[idxA]) {
      merge.push(arrB[idxB])
      idxB++;
    }
  }
  return merge;
}
