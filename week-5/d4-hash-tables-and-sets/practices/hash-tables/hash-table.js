const sha256 = require('js-sha256');
const { stringify } = require('mocha/lib/utils');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // this.numBuckets = numBuckets;
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null); // [null, null, null, null]

  }

  hash(key) {
    // first 8 characters of sha256 hash of key
    let hashHexStr = sha256(key).slice(0, 8)
    // convert to integer
    return parseInt(`0x${hashHexStr}`)
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // find the index
    const hashIndex = this.hashMod(key);
     const newNode = new KeyValuePair(key, value);
    if (!this.data[hashIndex]) {
      this.data[hashIndex] = newNode;
      this.count++; // if count > capacity, collision exists
      //if something else exists at bucket
    } else {
      throw Error("hash collision or same key/value pair already exists!")
  }
}

  insertWithHashCollisions(key, value) {
    // find the index

    const hashIndex = this.hashMod(key);
    const newPair = new KeyValuePair(key, value);

    // add to head method if collision happens

    if (!this.data[hashIndex]) {
      this.data[hashIndex] = newPair;

  }  else { // key into new pair. new pair is now the head
    newPair.next = this.data[hashIndex];  // just like newNode.next = this.head from addToHead()
    this.data[hashIndex] = newPair; // just like this.head = newNode from the addToHead() function
  }
  this.count++;
}

  insert(key, value) {
    const hashIndex = this.hashMod(key);
    let currentPair = this.data[hashIndex]

    // check if same key already exists
    while (currentPair && currentPair.key !== key) {
      currentPair = currentPair.next;
    }
    // if truthy, the same key exists so update value
    if (currentPair) {
      currentPair.value = value;
    } else {
      const newPair = new KeyValuePair(key,value);
      if (!this.data[hashIndex]) {
        this.data[hashIndex] = newPair;
      } else{
        newPair.next = this.data[hashIndex];
        this.data[hashIndex] = newPair;
      }
      this.count++;
    }

  }

}


module.exports = HashTable;
