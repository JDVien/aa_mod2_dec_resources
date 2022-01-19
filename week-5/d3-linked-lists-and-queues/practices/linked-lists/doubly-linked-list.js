class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    let newNode = new DoublyLinkedListNode(val);

    // check if list has nodes already
    if (this.length >= 1) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++
  }
  /// note for assessment:
  addToTail(val) {
    // Your code here
    let newNode = new DoublyLinkedListNode(val);
    // check to see if there's something in the list:
    if (this.length >= 1) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else { // if empty
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
