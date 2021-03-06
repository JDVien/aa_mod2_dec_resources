// HINT:  Review counting islands before starting this problem!
// // const sonar_data = [
// //     [-5, -5, -5],
// //     [-6, -5, -8],
// //     [-5, -7, -5]
// //   ];
// //   console.log(findNeighbors([1, 1], sonar_data)) // [ [ 2, 1 ], [ 1, 0 ], [ 1, 2 ] ]

//   const sonar_1 = [
//     [-5, -5, -5, -5, -5],
//     [-5, -8, -8, -9, -7],
//     [-5, -5, -5, -5, -8],
//     [-5, -5, -5, -5, -5]
//   ];
//   let visited = new Set();
// trenchTraversal([1, 1], sonar_1, visited); // [ [ 2, 1 ], [ 1, 0 ], [ 1, 2 ] ]
// console.log(trenchTraversal([1, 1], sonar_1, visited)) //


function findNeighbors(node, matrix) {
    // Only consider N, S, E, W nodes
    const neighbors = [];
    let row = node[0]
    let col = node[1]
    // North
    if (row > 0 && matrix[row - 1][col] < -5) neighbors.push([row -1, col]);
    // South
    if (row < matrix.length - 1 && matrix[row + 1][col] < -5) neighbors.push([row + 1, col])
    // East
    if (col > 0 && matrix[row][col - 1] < -5) neighbors.push([row, col - 1])
    // West
    if (col < matrix[row].length - 1 && matrix[row][col + 1] < -5) neighbors.push([row, col + 1])

    return neighbors
    // Your code here
}
// brad's:
function trenchTraversal(node, matrix, visited) {
    // Don't bother traversing if it is to shallow
    let row = node[0];
    let col = node[1];
    if (matrix[node[0]][node[1]] >= -5) return false;
    // note that this program works with queue or stack. Just alter pop -> shift
    // point 1
    const queue = [node];
    console.log("starting node value in queue is: " + queue)
    visited.add(`${row}, ${col}`)
    // point 2
    console.log("contents of visited set when first added: ");
    console.log(visited)
    let trenchLength = 0;
    // Traverse the potential trench to count it's length
    console.log("now entering the While loop:")
    console.log();
    while (queue.length > 0) {

        let current = queue.shift();
        trenchLength++;
        console.log(`"current" value at while loop (also trenchLength) ${trenchLength}: ${current}`)
        console.log(`${current} is removed from queue afted being set to 'current'`)

        let currentNeighbors = findNeighbors(current, matrix) // gives acceptable neighbors
        console.log(`contents of currentNeighbors at loop ${trenchLength}: ${currentNeighbors} `)
        console.log(`contents of "visited" set after loop ${trenchLength}:  `)
        console.log(visited)
        console.log();
        // this will check and reject Y-shape trenches and too-short trenches:
         if (currentNeighbors.length > 2 || currentNeighbors.length < 1) return false;

        for (let neighbor of currentNeighbors) {
            let [row, col] = neighbor;
            let nodeString = `${row}, ${col}` // for visited.has to work
            if (!visited.has(nodeString)) {
                visited.add(nodeString)
                queue.push(neighbor)
                console.log(`neighbor ${neighbor} is pushed into the queue`)
            }
        }

    }
    console.log("exiting the while loop")
    if (trenchLength >= 3) {
        return true;
    }
}

function identifyTrench(trenchMatrix) {
    // Start at 0,0 and attempt to traverse any unvisited nodes
   let visited = new Set();

   for (let row = 0; row < trenchMatrix.length; row++) {
       for (let col = 0; col < trenchMatrix[row].length; col++) {
        let nodeString = `${row}, ${col}`
        if (!visited.has(nodeString)) {
            let trenchCheck = trenchTraversal([row,col], trenchMatrix, visited)
            if (trenchCheck === true) return true;
        }
       }
   }
   return false
}

// Uncomment for local testing

// // Example 0
// const sonar_0 = [
//     [-5, -5, -5],
//     [-6, -5, -8],
//     [-5, -7, -5]
// ]

// console.log(findNeighbors([1,1], sonar_0)) // => Expect [[2, 1], [1, 0], [1, 2]];

// Example 1
const sonar_1 = [
          [-5,-5,-5,-5,-5],
          [-5,-8,-8,-9,-7],
          [-5,-5,-5,-5,-8],
          [-5,-5,-5,-5,-5]
]
console.log(identifyTrench(sonar_1)) // <- Expect 'true'

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


// mine:
// function trenchTraversal(node, matrix, visited) {
//     // Don't bother traversing if it is to shallow


//     // Traverse the potential trench to count it's length


//     let neighbors = findNeighbors(node, matrix)
//     let nNode = neighbors[0];
//     // console.log(nNode);
//     // console.log(matrix[node[0]][node[1]])
//     if (matrix[node[0]][node[1]] >= -5) return false;
//     // visited.add(nNode);
//     let row = nNode[0];
//     let col = nNode[1];
//     const stack = [[row, col]];
//     visited.add(`${row}, ${col}`)
//     let trenchLenght = 0;

//     while (stack.length > 0) {
//         let currentNode = stack.pop();
//         trenchLength++;
//         let currentRow = currentNode[0];
//         let currentCol = currentNode[1];

//         let nodeString = `${currentRow}, ${currentCol}`

//         if (!visited.has(nodeString)) {
//             visited.add(nodeString)


//             console.log(nodeString)
//             for (let i = 0; i < neighbors.length; i++) {
//                 let neighbor = neighbors[i];
//                 stack.push([neighbor[0], neighbor[1]])
//             }
//             console.log(visited)

//         }

//     }if (visited.size < 3) return false;
//     return true;

// }
