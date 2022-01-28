// HINT:  Review counting islands before starting this problem!
// this is Bra'd walkthrough version
function findNeighbors(node, matrix) {
    // Only consider N, S, E, W nodes
    let [row, col] = node; // [0,2] --> row = 0 col = 2
    let neighbors = [];
    // North
    if (row - 1 > 0 && matrix[row - 1][col] < -5) neighbors.push([row -1, col]);
    // South
    if (row + 1 < matrix.length && matrix[row + 1][col] < -5) neighbors.push([row + 1, col])
    // East
    if (col -1 > 0 && matrix[row][col - 1] < -5) neighbors.push([row, col - 1])
    // West
    if (col + 1< matrix[row].length - 1 && matrix[row][col + 1] < -5) neighbors.push([row, col + 1])

    return neighbors
    // Your code here
}

function trenchTraversal(node, matrix, visited) {
    // Don't bother traversing if it is to shallow



    let row = node[0];
    let col = node[1];
    // console.log(nNode);
    // console.log(matrix[node[0]][node[1]])
    if (matrix[node[0]][node[1]] >= -5) return false;
    // visited.add(nNode);

    const stack = [node];
    visited.add(`${row}, ${col}`)
    let trenchlength = 0;
    // Traverse the potential trench to count it's length

    while (stack.length > 0) {

        let current = stack.pop();
        trenchLength++;
        // let currentRow = currentNode[0];
        // let currentCol = currentNode[1];
        let currentNeighbors = findNeighbors(current, matrix) // gives acceptable neighbors

        if (currentNeighbors.length > 2 || currentNeighbors.length < 1) return false;

        for (let neighbor of currentNeighbors) {
            let [row, col] = neighbor;
            let nodeString = `${row}, ${col}`
            if (!visited.has(nodeString)) {
                visited.add(nodeString)
                stack.push(neighbor)
            }
        }

    }
    if (trenchlength >= 3) {
        return true;
    }
}

function identifyTrench(trenchMatrix) {
    // Start at 0,0 and attempt to traverse any unvisited nodes
    // Your code here
}

// Uncomment for local testing

// // Example 0
// const sonar_0 = [
//     [-5, -5, -5],
//     [-6, -5, -8],
//     [-5, -7, -5]
// ]

// console.log(findNeighbors([1,1], sonar_0)) => Expect [[2, 1], [1, 0], [1, 2]];

// // Example 1
// const sonar_1 = [
//           [-5,-5,-5,-5,-5],
//           [-5,-8,-8,-9,-7],
//           [-5,-5,-5,-5,-8],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_1)) // <- Expect 'true'

// // Example 2
// const sonar_2 = [
//           [-5,-5,-5,-7,-5],
//           [-5,-8,-8,-9,-5],
//           [-5,-5,-5,-7,-5],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_2)) // <- Expect 'false'

// // Example 3
// const sonar_3 = [
//           [-5,-5,-5,-5,-5],
//           [-5,-5,-5,-5,-5],
//           [-5,-9,-9,-5,-5],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_3)) // <- Expect 'false'


/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyTrench, findNeighbors, trenchTraversal];
