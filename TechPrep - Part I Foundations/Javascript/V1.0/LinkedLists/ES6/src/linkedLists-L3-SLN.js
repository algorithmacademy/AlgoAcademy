
let L1 = function() {
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  class SinglyLinkedList {
    constructor() {
      this.head = new Node(null, null);
      this.tail = null;
    }


    append(data) {
      let node = new Node(data);

      this.tail.next = node;
      this.tail = node;

      return node;
    }



    insertFirst(data) {
      let node = new Node(data, this.head.next);
      this.head.next = node;

      return node;
    }



    insert(index, data) {
      let node = new Node(data);
      let prev = this.head;

      while (index > 0 && prev.next) {
        prev = prev.next;
      }

      node.next = prev.next;
      prev.next = node;

      if (!node.next) {
        this.tail = node;
      }

      return node;
    }



    get(index) {
      let node = this.head.next;
      let count = 0;

      while (count++ < index && node.next !== this.tail) {
        node = node.next;
      }

      return node;
    }



    remove(index) {
      let result;



      return result;
    }



    find(data) {
      let node = this.head.next;
      let pos = 0;

      while (node.next != this.tail) {
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

      let node = this.head.next;
      while (node.next !== this.tail) {
        result.push(node.data);
        node = node.next;
      }

      return result;
    }
  }

  return [SinglyLinkedList, Node];
};
