
let L1 = function() {
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }



    add(index, data) {
      let node = new Node(data);
      if (!index) {
        node.next = this.head;
        this.head = node;

        if (this.tail == null) {
          this.tail = node;
        }
      }
      else {
        let prev = this.get(index-1);

        node.next = prev.next;
        prev.next = node;

        if (prev == this.tail) {
          this.tail = node;
        }
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



    remove(index) {
      let result;
      if (!index) {
        result = this.head;
        this.head = this.head.next;

        if (result == this.tail) {
          this.tail = this.head;
        }

        return result;
      }

      let node = this.get(index-1);
      result = node.next;
      node.next = node.next.next;

      if (result == this.tail) {
        this.tail = node;
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

  return [SinglyLinkedList, Node];
};
