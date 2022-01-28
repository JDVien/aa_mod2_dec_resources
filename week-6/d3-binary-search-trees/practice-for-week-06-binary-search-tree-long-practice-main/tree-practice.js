const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  let current = rootNode;

  while (current.left !== null) {
    current = current.left;
  }
  return (current.val);
}

function findMaxBST (rootNode) {
  let current = rootNode;

  while (current.right !== null) {
    current = current.right;
  }
  return current.val;
}

function findMinBT (rootNode) {
  let current = rootNode;
  if (rootNode === null) return;
  if (findMinBT(rootNode.left) < rootNode.val) {
    rootNode.val = findMinBT(rootNode.left);
 }
 if (findMinBT(rootNode.right) < rootNode.val) {
  rootNode.val = findMinBT(rootNode.right);
 }
 return rootNode.val;

}

function findMaxBT (rootNode) {
  let current = rootNode;
  if (rootNode === null) return;
  if (findMaxBT(rootNode.left) > rootNode.val) {
    rootNode.val = findMaxBT(rootNode.left);
 }
 if (findMaxBT(rootNode.right) > rootNode.val) {
  rootNode.val = findMaxBT(rootNode.right);
 }
 return rootNode.val;
}

function getHeight (rootNode) {
  let lcount = 0;
  let rcount = 0;
  if (rootNode === null) return;
  while (rootNode.left !== null) {
    lcount++;
  }
  while (rootNode.right !== null) {
    rcount++;
  }
}

function countNodes (rootNode) {
  // Your code here
}

function balancedTree (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
