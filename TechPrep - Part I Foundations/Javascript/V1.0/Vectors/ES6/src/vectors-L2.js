
let L2 = function() {

  class Vector {
    constructor(initialCapacity, maxCapacity) {
      this.capacity = initialCapacity || 8;   // Default array size initially to 8 elements
      this.minCapacity = this.capacity;       // Don't reduce below this value
      this.max = maxCapacity || 1 << 4;       // Default max vector size to 16;
      this.length = 0;

      this.storage = new Array(this.capacity);
    }




    add(value) {
      // You may start with your L1 implementation if you wish, but change to use no built-in functions
    }




    insert(index, value) {
      // You may start with your L1 implementation if you wish, but change to use no built-in functions
    }




    remove(index) {
      // You may start with your L1 implementation if you wish, but change to use no built-in functions
    }




    // Vector.set(5, value) is the same as array[5] = value;
    //
    set(index, value) {
      this.storage[index] = value;
    }




    // x = Vector.get(5) is the same as x = array[5];
    //
    get (index) {
      return this.storage[index];
    }




    resize() {
      this.capacity *= 2;
      let tempStorage = new Array(this.capacity);

      for (let i=0; i<this.storage.length; i++) {
        tempStorage[i] = this.storage[i];
      }

      this.storage = tempStorage;
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