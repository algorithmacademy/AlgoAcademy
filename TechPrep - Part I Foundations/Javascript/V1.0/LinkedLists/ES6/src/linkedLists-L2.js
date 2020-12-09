
let L2 = function() {
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }

  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }



    add(data) {
      // Your code here
    }



    insertBefore(index, data) {
      // Your code here
    }



    insertAfter(index, data) {
      // Your code here
    }


    get(index) {
      // Your code here
    }


    set(index, data) {
      // Your code here
    }


    remove(index) {
      // Your code here
    }



    find(data) {
      // Your code here
    }



    contains(data) {
      // Your code here
    }



    toArray() {
      // Your code here
    }
  }

  return [DoublyLinkedList, Node];
};
