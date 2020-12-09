
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

      this.resize(false, this.length + 1);
      this.storage[this.length++] = value;
    }




    insert(index, value) {
      // Start with your L2 implementation

      if (index < 0 || index >= this.length) {
        throw new Error("index out of range.");
      }

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
      // Start with your L2 implementation

      if (index < 0 || index >= this.length) {
        throw new Error("index out of range.");
      }
      else if (this.length === 0) {
        throw new Error("Vector already empty.");
      }

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
      // Start with your L2 implementation

      if (index < 0 || index >= this.length) {
        throw new Error("index out of range.");
      }

      this.storage[index] = value;
    }




    // x = Vector.get(5) is the same as x = array[5];
    //
    get (index) {
      // Start with your L2 implementation

      if (index < 0 || index >= this.length) {
        throw new Error("index out of range.");
      }

      return this.storage[index];
    }




    resize(isRemoving, desiredLength) {
      // Start with your L2 implementation

      let tempStorage = null;
      let resizeNeeded = false;

      if (isRemoving) {
        if (desiredLength < this.minCapacity) {
          return false;
        }

        if (desiredLength === (this.capacity / 2)) {
          this.capacity /= 2;
          resizeNeeded = true;
        }
      }
      else {
        if (desiredLength > (this.max)) {
          throw new Error("insufficient capacity.");
        }

        if (desiredLength > this.capacity) {
          this.capacity *= 2;
          resizeNeeded = true;
        }
      }

      if (resizeNeeded) {
        tempStorage = new Array(this.capacity);

        for (let i = 0; i < desiredLength; i++) {
          tempStorage[i] = this.storage[i];
        }

        this.storage = tempStorage;
        return true;
      }

      return false;
    }




    find(value) {
      // BONUS: Your code here

      for (let i=0; i<this.length; i++) {
        if (this.storage[i] === value) {
          return i;
        }
      }

      return null;
    }




    contains(value) {
      // BONUS: Your code here.  Can you find a clever way to reuse existing functions?

      return this.find(value) !== null;
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