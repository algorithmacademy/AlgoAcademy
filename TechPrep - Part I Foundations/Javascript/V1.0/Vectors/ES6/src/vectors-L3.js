
let L3 = function() {

  class Vector {
    constructor(initialCapacity, maxCapacity) {
      this.capacity = initialCapacity || 8;   // Default array size initially to 8 elements
      this.minCapacity = this.capacity;       // Don't reduce below this value
      this.max = maxCapacity || 1 << 4;       // Default max vector size to 16;
      this.length = 0;

      this.storage = new Array(this.capacity);
    }




    add(value) {
      // Start with your L2 implementation
    }




    insert(index, value) {
      // Start with your L2 implementation
    }




    remove(index) {
      // Start with your L2 implementation
    }




    // Vector.set(5, value) is the same as array[5] = value;
    //
    set(index, value) {
      // Start with your L2 implementation
    }




    // x = Vector.get(5) is the same as x = array[5];
    //
    get (index) {
      // Start with your L2 implementation
    }




    resize() {
      // Start with your L2 implementation
    }




    find(value) {
      // BONUS: Your code here
    }




    contains(value) {
      // BONUS: Your code here.  Can you find a clever way to reuse existing functions?
    }




    toArray() {
      let result = [];

      for (let i=0; i<this.length; i++) {
        result[i] = this.storage[i];
      }

      return result;
    }
  }

  return Vector;
};