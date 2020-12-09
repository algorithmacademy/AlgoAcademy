let L1 = function() {
  class HashTable {
    constructor(capacity) {
      this.capacity = capacity || 4;
      this.table = new Array(this.capacity);
      this.length = 0;
    }

    // HINT: Algorithm of adding an item
    //
    //  Compute numeric hash of the key into bucketIndex
    //  Read table based on bucketIndex
    //  Was it previously filled?
    //    No?  Create a new bucket
    //    yes?  Add entry to it
    //  Any collisions? based on key
    //    No?  Insert value
    //    Yes?  Replace value
    //  Resize the storage if necessary (advanced)

    set(key, value) {
      let bucketIndex = this.hasher(key);
      let bucket = this.table[bucketIndex];

      if (!bucket) {
        bucket = [];
        this.table[bucketIndex] = bucket;
      }

      let override = false;

      for (let i = 0; i < bucket.length; i++) {
        let entry = bucket[i];

        if (entry[0] === key) {
          entry[1] = value;
          override = true;
        }
      }

      if (!override) {
        bucket.push([key, value]);
        this.length++;

        if (this.length >= this.capacity * 0.75) {
          this.rehash(this.capacity * 2);
        }
      }

      return this;
    }

    get(key) {
      // Your code here
      let bucketIndex = this.hasher(key);
      let bucket = this.table[bucketIndex];

      for (let index = 0; index < bucket.length; index++) {
        if (bucket[index][0] == key) {
          return bucket[index][1];
        }
      }

      return null;
    }

    remove(key) {
      // Your code here
      let bucketIndex = this.hasher(key);
      let bucket = this.table[bucketIndex];

      for (let index = 0; index < bucket.length; index++) {
        if (bucket[index][0] == key) {
          bucket.splice(index, 1);
          this.length--;
          break;
        }
      }

      return null;
    }

    toString() {
      // Your code here
    }

    hasher(key) {
      return key.toString().length % this.capacity;
    }

    rehash(newCapacity) {
      // Your code here
    }
  }

  return HashTable;
};