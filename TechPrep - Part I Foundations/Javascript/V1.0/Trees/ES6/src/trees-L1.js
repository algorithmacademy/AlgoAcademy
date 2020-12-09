
let L1 = function() {
  class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }


  class BST {
    constructor() {
      this.root = null;
    }



    add(data) {
      // Your code here
    };



    remove(data) {
      // Your code here
    };



    preOrder(node, callback) {
      // Your code here
    };



    postOrder(node, callback) {
      // Your code here
    };



    inOrder(node, callback) {
      // Your code here
    };



    contains(data) {
      // Your code here
    };



    traverseDFS(callback) {
      // Your code here
    };



    traverseBFS(callback) {
      // Your code here
    };



    getHeight(node = this.root) {
      // Your code here
    }



    getMinValue(node) {
      // Your code here
    };



    getMaxValue(node) {
      // Your code here
    };



    getLevel(level, node=this.root) {
      // Your code here
    }



    getNodeCount(node=this.root, callback) {
      //
    }
  }

  return [Node, BST];
};
