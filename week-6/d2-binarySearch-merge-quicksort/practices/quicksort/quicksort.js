function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;
  // Pick the first value as the pivot
  const pivot = arr[0];
  // Orient the pivot so that...
  const left = [];
  const right = [];
  for ( let i = 1; i < arr.length; i++) {
      // every number smaller than the pivot is to the left
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      // every number larger (or equal) than the pivot is to the right
      right.push(arr[i])
    }
  }
  // Recursively sort the left
  const leftSorted = quicksort(left)
  // Recursively sort the right
  const rightSorted = quicksort(right);
  // Return the left, pivot and right in sorted order
  return [...leftSorted, pivot, ...rightSorted]
}


module.exports = [quicksort];
