class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  addToHead(value) {
    const newNode = new LinkedListNode(value);
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }
  addToTail(value) {
    const newNode = new LinkedListNode(value);
    this.length++;
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    return this;
  }
}















// class LinkedListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   addToHead(value) {
//     const newNode = new LinkedListNode(value);

//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//   }
//   addToTail(value) {
//     const newNode = new LinkedListNode(value);
//     this.length++;
//     if (!this.head) {
//       this.head = newNode;
//       return this;
//     }
//     let current = this.head;
//     while(current.next) { // will go through each node to check if there's something in it until it reaches an empty one
//       current = current.next;
//     }
//     current.next = newNode; // once the empty tail is reached with the loop, newNode's value is set into the tail
//   }
// }
