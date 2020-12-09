
let L0 = () => {
  class Node {
    constructor(data) {
      this.data = data || null;
      this.children = [];
    }
  }

  class Tree {
    constructor() {
      this.root = null;
    }



    add(parent, data) {
      // Your code here...
    }

    remove(data) {
      // Your code here...
    }



    findBFS(data) {
      // Your code here...
    }



    preOrder(node, callback) {
      // Your code here...
    }



    postOrder(node, callback) {
      //  Your code here...
    }



    traverseBFS(callback) {
      // Your code here...
    }



    traverseDFS(callback, how) {
      // Your code here...
    }
  }


  return [Node, Tree];
};
