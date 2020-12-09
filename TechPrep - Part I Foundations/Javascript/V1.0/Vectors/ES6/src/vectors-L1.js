
let L1 = function() {

  class Vector {
    constructor(initialCapacity) {
      this.capacity = initialCapacity || 8;   // Default array size initially to 8 elements
      this.length = 0;

      this.storage = new Array(this.capacity);
    }




    add(value) {
      this.storage[this.length++] = value;
    }




    insert(index, value) {
      this.storage.splice(index, 0, value);
      this.storage[index] = value;
      this.storage.length -= 1;
    }




    remove(index) {
      if (index === undefined || index === null) {
        delete this.storage[this.length];
      }
      else {
        this.storage.splice(index, 1);
      }
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
      // ...
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