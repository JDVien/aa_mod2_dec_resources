// from aA open reading material
// Overall Time Complexity: O(n^2)
// This Algo is in-place, because both splice and push mutate the original array. O(n) space
function recursiveSort(arr) {

    // If the array is length 1 or less, return
    if (arr.length <= 1) return arr;

    // Find and remove the largest value in the array
    let maxIndex = 0;
    for (let i = 1 ; i < arr.length ; i++) {
        if (arr[i] > arr[maxIndex]) maxIndex = i;
    }
    const maxValue = arr[maxIndex];
    arr.splice(maxIndex, 1);

    // Sort the remaining elements
    arr = recursiveSort(arr);

    // Put the largest value back at the end of the array
    arr.push(maxValue);

    return arr;
}

console.log(recursiveSort([3,2,0,4,1]))
