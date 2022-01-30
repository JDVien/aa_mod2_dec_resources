function getNeighbors(row, col, graph) {
  const neighbors = [];
  // Check top
  if (row > 0 && graph[row - 1][col] === 1)
    neighbors.push([row - 1, col]);
  // Check bottom
  if (row < graph.length - 1 && graph[row + 1][col] === 1)
    neighbors.push([row + 1, col]);
  // Check left
  if (col > 0 && graph[row][col - 1] === 1)
    neighbors.push([row, col - 1 ]);
  // Check right
  if (col < graph[row].length - 1 && graph[row][col + 1] === 1)
    neighbors.push([row, col + 1])
  // Return neighbors
  return neighbors;
}

// refactored version that uses a For Of loop instead of For loop
function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const visited = new Set();
  // Create a stack, put the starting node in the stack
  const stack = [ [row, col] ];
  // Put the stringified starting node in visited
  visited.add(`${row}, ${col}`)
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while (stack.length > 0) {
    // Pop the first node
    let currentNode = stack.pop();
    let currentRow = currentNode[0];
    let currentCol = currentNode[1];

    // stringify the node (needed for visited check)

    let currentNeighbors = getNeighbors(currentRow, currentCol, graph);
    size++;
    for (let neighbor of currentNeighbors) {

       let [row1, col1] = neighbor;
       let nodeString =  `${row1}, ${col1}`
      if (!visited.has(nodeString)) {

        // if not, mark it as visited
        visited.add(nodeString);

        // DO THE THING (increment size by 1)

        stack.push(neighbor)
    }

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
  }
 }
 return size;
}

// matrix = [
//   [1,1,1,0,0],
//   [0,1,1,0,1],
//   [0,1,1,0,1],
// ]

// // console.log(getNeighbors(1, 1, matrix)) // [[0, 1], [1, 2], [2, 1]]
// // console.log(getNeighbors(0, 0, matrix)) // [[0, 1]]
// // console.log(getNeighbors(2, 4, matrix)) // [[1, 4]]


// console.log(islandSize(0, 0, matrix)) // 7
// console.log(islandSize(1, 4, matrix)) // 2




////////////

module.exports = [getNeighbors, islandSize];

function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const visited = new Set();
  // Create a stack, put the starting node in the stack
  const stack = [ [row, col] ];
  // Put the stringified starting node in visited

  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while (stack.length > 0) {
    // Pop the first node
    let currentNode = stack.pop();
    let currentRow = currentNode[0];
    let currentCol = currentNode[1];

    // stringify the node (needed for visited check)
    let nodeString = `${currentRow}, ${currentCol}`

    // check if its been visited
    if (!visited.has(nodeString)) {

    // if not, mark it as visited
    visited.add(nodeString);

    // DO THE THING (increment size by 1)
    size++;
    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
    let neighbors = getNeighbors(currentRow, currentCol, graph);
    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];
      stack.push([neighbor[0], neighbor[1]]);
    }
  }
 }
 return size;
}
