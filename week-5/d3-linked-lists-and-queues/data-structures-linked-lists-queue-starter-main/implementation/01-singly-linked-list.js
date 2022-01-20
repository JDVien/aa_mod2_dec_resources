// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;

        // const newNode = new SinglyLinkedNode(val);
        // newNode.next = this.head;
        // this.head = newNode;
        // this.length++;
        // return this; // returns the list after all new nodes are added to it
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
       
        //////////////////////
        // Add node of val to tail of linked list
        // const newNode = new SinglyLinkedNode(val);
        // this.length++; // increment comes first for addToTail
        // if (!this.head) {
        //     this.head = newNode;
        //     return this;
        // }

        // let curr = this.head;
        // while (curr.next) {  // runs until curr.next is null
        //     curr = curr.next; // the current head will become the next head unless it is null
        // }
        // curr.next = newNode;
        // return this;
    }

    removeFromHead() {

        ///////////////////////////////////
        // Remove node at head
        // let removedHead = this.head;
        // if (!this.head) {
        //     return undefined;
        // }
        // if (this.head) {
        //     this.head = this.head.next;
        //     this.length--;
        // }
        // return removedHead;


        // for doubly linked lists you'll need an implementation for this.tail:
        // if (this.head === null) this.nail = null;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let previous;

        while(current.next) {
            previous = current;
            current = current.next;
        }
         if (!previous) {
                this.head = null;
        } else {
                previous.next = null;
        }
        this.length--;
        return current;
        // Write your hypothesis on the time complexity of this method here

    }

    peekAtHead() {
        if (!this.head) {
            return undefined;
        }
        // Return value of head node
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        if (!this.head) {
            return;
        }
            let current = this.head;
            while (current) {
                // process.stdout.write(`${current.value} -> `);
                console.log(current.value);
                current = current.next;

        // console.log("NULL");
        // Write your hypothesis on the time complexity of this method here
    }
}
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
