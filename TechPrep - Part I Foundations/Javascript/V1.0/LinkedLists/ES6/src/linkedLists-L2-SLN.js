
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
      let node = new Node(data);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      }
      else {
        node.previous = this.tail;
        this.tail.next = node;
        this.tail = node;
      }
      return node;
    }



    insertBefore(index, data) {
      let node = new Node(data);
      if (!index) {
        node.next = this.head;
        this.head.prev = node;

        if (this.head === this.tail) {
          this.tail = node;
        }

        this.head = node;
      }
      else {
        let current = this.get(index);
        let prev = current.prev;
        let next = current.next;

        node.next = current;
        current.prev = node;
        prev.next = node;
        node.prev = prev;
      }

      return node;
    }



    insertAfter(index, data) {
      let node = new Node(data);
      if (!index) {
        if (!this.tail) {
          this.head = node;
          this.tail = node;
        }
        else {
          this.tail.next = node;
          node.prev = this.tail;
        }
      }
      else {
        let current = this.get(index);
        let next = current.next;

        node.next = next;
        if (next) {
          next.prev = node;
        }
        current.next = node;
        node.prev = current;
      }

      return node;
    }


    get(index) {
      let node = this.head;
      let count = 0;

      while (count++ < index && node != null) {
        node = node.next;
      }

      return node;
    }


    set(index, data) {
      let node = this.get(index);
      if (node) {
        node.data = data;
      }
    }


    remove(index) {
      let result;

      result = this.get(index);
      if (!index) {
        if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
        }
        else {
          this.head = this.head.next;
        }
      }
      else {
        let prev = result.prev;
        let next = result.next;

        prev.next = next;
        if (result !== this.tail) {
          next.prev = prev;
        }
        else {
          this.tail = prev;
        }
      }

      return result;
    }



    find(data) {
      let node = this.head;
      let pos = 0;

      while (node != null) {
        if (node.data === data) {
          return { "position": pos, "node": node };
        }

        node = node.next;
        pos += 1;
      }

      return null;
    }



    contains(data) {
      let node = this.head;
      let count = 0;

      while (node != null) {
        if (node.data === data) {
          count += 1;
        }

        node = node.next;
      }

      return count;
    }



    toArray() {
      let result = [];

      let node = this.head;
      while (node != null) {
        result.push(node.data);
        node = node.next;
      }

      return result;
    }
  }

  return [DoublyLinkedList, Node];
};
