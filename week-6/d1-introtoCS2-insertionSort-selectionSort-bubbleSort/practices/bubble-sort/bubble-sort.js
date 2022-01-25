
function bubbleSort(arr) {
  let swapMade = true;
  // Iterate through the array
  while (swapMade) {

    swapMade = false;
    for (let i = 0; i < arr.length -1; i++) {
      // If the current value is greater than its neighbor to the right
      // Swap those values
      if (arr[i] > arr[i + 1]) {
        // [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        swap(arr, i, i + 1)
        swapMade = true;
 console.log(arr.join(","));
      }

    }
  // Do not move this console.log


  // If you get to the end of the array and no swaps have occurred, return
if (!swapMade) return arr;
  // Otherwise, repeat from the beginning
  // return arr
}

return arr;
}
// function swap(arr, i1, i2) {
//   [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
// }

function swap(array, idx1, idx2) {
  let temp = array[idx1]; // save a copy of the first value
  array[idx1] = array[idx2]; // overwrite the first value with the second value
  array[idx2] = temp; // overwrite the second value with the first value
}
//Note that the swap function does not create or return a new array. It mutates
//the original array:
// let arr1 = [2, 8, 5, 2, 6];
// swap(arr1, 1, 2);
// arr1; // => [ 2, 5, 8, 2, 6 ]

// let arr1 = [2, 8, 5, 2, 6];
// console.log(bubbleSort(arr1));

module.exports = bubbleSort;
