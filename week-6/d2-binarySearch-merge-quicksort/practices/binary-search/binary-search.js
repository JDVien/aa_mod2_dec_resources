function linearSearch (arr, target) {

  if (arr.includes(target))
    return arr.indexOf(target);
    else return -1;

};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let low = 0;
  let high = arr.length - 1;

  // While high and low indices do not overlap...
  while (low <= high) {

    // Find the midpoint between high and low indices
    let mid = Math.floor((high + low) / 2)
    // Compare the target value to the midpoint value
    if (arr[mid] === target) {
    // If the target equals the midpoint...
      // Return the midpoint index
      return mid;
    } else if (target > arr[mid]) {
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
      low = mid + 1;
    } else if (target < arr[mid]) {
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
      high = mid - 1;
    }
  }
  // Return -1 if the loop exits with overlapping pointers
  return -1;

}

// let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,15,17,18,20]
// console.log(binarySearch(arr1, 15));
// let array = [5, 28, 98, 13, 4, 87, 45, 2];
// let array1 = [2,4,5,13,28,45,87,98]
// console.log(binarySearch(array1, 87));

module.exports = [linearSearch, binarySearch]
