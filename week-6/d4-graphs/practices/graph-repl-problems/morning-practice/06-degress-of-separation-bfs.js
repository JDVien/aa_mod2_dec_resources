const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function degreesOfSeparation(start, end) {
  const visited = new Set().add(start)
  const queue = [];
  queue.push([start]);
  // visited.add(start);
//using a count variable works too, just return count - 1;
  while (queue.length > 0) {
    const currentPath = queue.shift();
    const currentNode = currentPath[currentPath.length - 1]
       if (currentNode === end) {
          return currentPath.length - 1;

         }

    adjList[currentNode].forEach(neighbor => {

       if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(currentPath.concat(neighbor))
       }

     })
    }
    return false;
}

console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false
