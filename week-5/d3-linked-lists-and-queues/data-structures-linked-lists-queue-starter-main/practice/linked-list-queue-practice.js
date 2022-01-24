// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        // this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity

        // O(n):
        let length = 0;
        if (!this.head) return length;

        let current = this.head;
        length++;
        while (current.next) {
            length++;
            current = current.next;
        }
        return length;

        //O(1) solution needs an additional pointer on the list
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        // Write your hypothesis on the time complexity of this method here
        // O(n) version:
        let sum = 0;
        if (!this.head) return sum;

        let current = this.head;
        sum += current.value;
        while (current.next) {
            current = current.next;
            sum += current.value;
        }
        return sum;
    }

    averageValue() {
        // Returns the average value of all the nodes
        // Write your hypothesis on the time complexity of this method here
        // version 1:
        if (!this.head) return 0;
        return this.sumOfNodes() / this.listLength();

        // version 2 if we do not have listLength() function:
        let sum = 0;
        let length = 0;
        if (!this.head) return sum;

        let current = this.head;
        length++;
        sum += current.value;
        while (current.next) {
            current = current.next;
            sum += current.value;
            length++;
        }
        return sum / length;
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        // Write your hypothesis on the time complexity of this method here
        // O(n)
        let current = this.head;
        while (n && current) {
            if (n < 0) return null;
            current = current.next;
            n--;
        }
        if (n === 0 && current) return current;
        return null;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
    }
}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
