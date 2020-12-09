
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
    //
    set(key, value) {
      let bucketIndex = this.hasher(key);
      let bucket
        = this.table[bucketIndex]
        = this.table[bucketIndex] || [];

      let foundExistingEntry = false;

      for (let i = 0; i < bucket.length; i++) {
        let entry = bucket[i];

        if (entry[0] === key) {
          entry[1] = value;
          foundExistingEntry = true;
        }
      }

      if (!foundExistingEntry) {
        bucket.push([key, value]);
        this.length++;

        if (this.length >= this.capacity * 0.75) {
          this.rehash(this.capacity * 2);
        }
      }

      return this;
    }


    // Algorithm of a get (sometimes called a retrieve)
    //
    //  Compute numeric hash of the key into bucketIndex
    //  does numeric key exist in bucket? based on index
    //    No?  Do nothing
    //  does value exist in entries? based on key
    //    No?  Do nothing
    //    Yes?  return value
    //
    get(key) {
      let bucketIndex = this.hasher(key);
      let bucket = this.table[bucketIndex];

      if (!bucket) {
        return null;
      }

      for (let i = 0; i < bucket.length; i++) {
        let entry = bucket[i];

        if (entry[0] === key) {
          return entry[1];
        }
      }

      return null;
    }


    // Algorithm of a remove
    //
    //  Compute numeric hash of the key into bucketIndex
    //  does numeric key exist in bucket? based on index
    //    No?  Do nothing
    //  does value exist in entries? based on key
    //    No?  Do nothing
    //    Yes?  remove it, return old value
    //
    remove(key) {
      var bucketIndex = this.hasher(key);
      var bucket = this.table[bucketIndex];

      if (!bucket) {
        return null;
      }

      for (let i = 0; i < bucket.length; i++) {
        let tuple = bucket[i];

        if (tuple[0] === key) {
          bucket.splice(i, 1);
          this.length--;

          if (this.length < this.capacity * 0.25) {
            this.rehash(this.capacity / 2);
          }
          return tuple[1];
        }
      }
    }



    toString() {
      return this.table.toString();
    }



    hasher(key) {
      return key.toString().length % this.capacity;
    }



    rehash(newCapacity) {
      let table = this.table;

      this.capacity = newCapacity;
      this.length = 0;
      this.table = [];

      table.forEach(function(bucket) {
        if (!bucket) {
          return;
        }
        for (let i = 0; i < bucket.length; i++) {
          let entry = bucket[i];
          this.set(entry[0], entry[1]);
        }
      }.bind(this));
    }
  }


  return HashTable;
};
