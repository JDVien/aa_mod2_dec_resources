// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    let newNode = new TreeNode(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    while (currentNode) {
      if (val < currentNode.val) { // makes sure any val smaller than root.val goes to the left side of the tree
        if (currentNode.left === null) {
          currentNode.left = newNode; // sets the new value in new left node
          return this;
        }
        currentNode = currentNode.left;
      } else {  // does the same check for values larger than root.value, and puts them on the right of the tree
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  search(val) {

    if (!this.root) return false;
    let current = this.root
    let found = false;
    while (current && !found) {
      if (current.val  > val) {
        current = current.left;
      } else if (current.val < val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found)
      return false;
    return found;
  }


  preOrderTraversal(currentNode = this.root) {
    // console.log(currentNode);

    // this.preOrderTraversal(this.left)
    // this. preOrderTraversal(this.right)
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
  }
}

module.exports = { BinarySearchTree, TreeNode };
