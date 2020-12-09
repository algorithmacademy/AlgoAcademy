
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

      this.resize(false, this.length + 1);
      this.storage[this.length++] = value;
    }




    insert(index, value) {
      // You may start with your L1 implementation if you wish, but change to use no built-in functions

      if (index === this.length) {
        this.add(value);
      }
      else {
        let tempItem = this.storage[this.length - 1];
        this.add(tempItem);

        for (let i = this.length - 3; i >= index; i--) {
          this.set(i + 1, this.storage[i]);
        }

        this.set(index, value);
      }
    }




    remove(index) {
      // You may start with your L1 implementation if you wish, but change to use no built-in functions

      this.resize(true, this.length - 1);

      if (index < this.length) {
        for (let i = index; i < this.length; i++) {
          this.storage[i] = this.storage[i + 1];
        }
      }

      delete this.storage[this.length--];
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




    resize(isRemoving, desiredLength) {
      let resizeNeeded = false;

      if (isRemoving) {
        if (desiredLength < this.minCapacity) {
          return false;
        }

        if (desiredLength === Math.floor(this.capacity / 2)) {
          this.capacity = Math.floor(this.capacity / 2);
          resizeNeeded = true;
        }
      }
      else {
        if (desiredLength > this.capacity) {
          this.capacity *= 2;
          resizeNeeded = true;
        }
      }

      if (resizeNeeded) {
        let tempStorage = new Array(this.capacity);

        for (let i = 0; i < desiredLength; i++) {
          tempStorage[i] = this.storage[i];
        }

        this.storage = tempStorage;
        return true;
      }

      return false;
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