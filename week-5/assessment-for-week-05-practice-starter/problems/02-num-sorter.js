class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        // Default to empty
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(value) {
        const newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    dequeue() {
        if (!this.head) {
            return null;
        }

        const returnValue = this.head.value;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = null;
        }

        this.length--;
        return returnValue;
    }

    // Use this method for testing
    print() {
        let current = this.head;

        while (current) {
            process.stdout.write(`${current.value} -> `);
            current = current.next;
        }

        console.log('NULL');
    }
}

// Above is the linked list based queue
// Below is the NumSorter class that should be modified
class NumSorter {
    constructor() {
        // note that the README specifically mentions to used only ONE set!
        this.numList = new LinkedList();
        this.allowedNums = new Set(); // notice that prior to modding to change
                        // allowedNums to a set, it used .includes, which usually means it was an array,
                        // which can be converted to a set, not numList
    }

    // Add a number to the list of allowed numbers
    // Should not have any duplicates in allowedNums -- hint to use a Set
    addAllowedNum(num) {
        if (!this.allowedNums.has(num)) {
            this.allowedNums.add(num);
            return `${num} added to allowedNums`;
        } else {
            return `${num} already in allowedNums`;
        }
    }

    // Returns the count of numbers in numList
    numCount() { // this function is really slow and unnecessary. refactor
        // let count = 0;
        // while (this.numList.size !== undefined) { // the while loop is pretty wasteful here
        //     count++;
        // }
        // return count;

        // refactored below:
        return this.numList.length; // numList has a given this.length property. Use it!
    }

    // Returns true if the number is allowed, false otherwise
    isNumAllowed(num) {
        return this.allowedNums.has(num);
    }

    // Build a numlist of integers from 0 to amount.
    // Only include allowed numbers
    // Returns count of numbers in numList
    buildNumList(amount) {
        for (let i = 0; i <= amount; i++) {
            if (this.isNumAllowed(i)) {
                this.numList.enqueue(i);
            }
        }
        return this.numCount();
    }

    // Remove and return the first number in the numList
    // If numList is empty, return undefined
    getFirstNum() {
        if (this.numList.length > 0) {
            return this.numList.dequeue();
        } else {
            return undefined;
        }
    }

    // Add a new number to the back of the numList
    addNumToBack(num) {
        if (this.isNumAllowed(num)) this.numList.enqueue(num);
        return this.numList.tail.value;
    }
}

// Uncomment to run local tests
// Note the linked list has a useful print() method

// const newNumSort = new NumSorter(0);
// console.log(newNumSort.addAllowedNum(0));
// console.log(newNumSort.addAllowedNum(1));
// console.log(newNumSort.addAllowedNum(2));
// console.log(newNumSort.addAllowedNum(3));
// console.log(newNumSort.buildNumList(4));

module.exports = { NumSorter, LinkedList };
