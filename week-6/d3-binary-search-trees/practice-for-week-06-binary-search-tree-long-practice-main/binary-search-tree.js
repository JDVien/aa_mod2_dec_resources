// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here

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

    insert(val, currentNode = this.root) {
        let newNode = new TreeNode(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        while (currentNode) {
            // kristen's solution has no loop, replace code chunk below into line 23
            // if (val < currentNode.val) {
            //   if (!currentNode.left) {
            //     currentNode.left = new TreeNode(val);
            //   } else {
            //     this.insert(val, currentNode.left);
            //   } else // repeat for right side
            // }
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
        let temp = this.root;
        while (temp) {
            if (val === temp.val) {
                return true;
            }
            if (val < temp.val) {
                temp = temp.left;
            } else {
                temp = temp.right;
            }
        }
        return false;

        // kristen's recursive version:
        /* if (!currentNode) return false;
        if (val === currentNode.val) return true;
        if (val < currentNode.val) return this.search(val, currentNode.left);
        if (val > currentNode.val) return this.search(val, currentNode.right);
        */
    }


    preOrderTraversal(currentNode = this.root) {
        if (currentNode === null) return;
        console.log(currentNode.val);
        this.preOrderTraversal(currentNode.left)
        this.preOrderTraversal(currentNode.right)
    }


    inOrderTraversal(currentNode = this.root) {
        if (currentNode === null) return;
        this.inOrderTraversal(currentNode.left)
        console.log(currentNode.val);
        this.inOrderTraversal(currentNode.right)
    }


    postOrderTraversal(currentNode = this.root) {
        if (currentNode === null) return;
        this.postOrderTraversal(currentNode.left)
        this.postOrderTraversal(currentNode.right)
        console.log(currentNode.val);
    }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
        // Put the starting node in a queue
        const queue = []
        queue.push(this.root);

        // While the queue is not empty
        while (queue.length) {

            // Dequeue a node and print it
            let node = queue.shift();

            console.log(node.val);

            // Put all of the node's children in the back of the queue
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
        let stack = [];
        stack.push(this.root)
        while (stack.length) {
            let node = stack.pop();
            console.log(node.val);

            if (node.left) {
                stack.push(node.left)
            }
            if (node.right) {
                stack.push(node.right)
            }
        }
    }
    
}

module.exports = { BinarySearchTree, TreeNode };
