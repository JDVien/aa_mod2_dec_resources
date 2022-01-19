class DynamicArray {

    constructor(defaultSize=4) {

      // Fill this out
      this.data = new Array(defaultSize); //array will have [null, null, null ,null]
      this.capacity = defaultSize; // 8 spaces inside this array
      this.length = 0; // better to use this.size instead to not conflict with built in .length
    }

    read(index) {
      // Fill this out
      // You may not use any built-in JS array functions
      if (index >= this.length) return undefined;
      return this.data[index]; //
    }

    unshift(val) {
      // note: unshift has O(n) complexity
      // Fill this out
      // You may not use any built-in JS array functions
      for (let i = this.length; i > 0; i--) {
        this.data[i] = this.data[i - 1];
      }
      this.data[0] = val;
      this.length++; // putting something in? increase length. decrement if removing
    }

  }


  module.exports = DynamicArray;
