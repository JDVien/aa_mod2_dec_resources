class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;

  }
}

class LinkedList {
  constructor() {
    // Your code here
    // default to empty
    this.head = null; // if head = null, list is empty
    this.length = 0;
    this.tail = null;
  }

  addToHead(val) { // 0(1) complexity
    // creates a new node with given value
    const newNode = new LinkedListNode(value);

    // set the node's Next pointer to the list's current head point
    newNode.next = this.head;

    // set the list head to point to the new link
    this.head = newNode;

    this.length++;
  }

  addToTail(val) {

    const newNode = new LinkedListNode(value);
    this.length++; // needs to be incremented first
    //this structure is an empty list
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    // now list with something in it
    let curr = this.head // start at head
    while(curr.next) { // as long as the next property is not null
      curr = curr.next;
    }
    curr.next = newNode;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
