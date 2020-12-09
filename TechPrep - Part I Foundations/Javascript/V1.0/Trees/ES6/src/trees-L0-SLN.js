
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

      let node = new Node(data);

      parent = parent || this.findBFS(data);

      if (parent) {
        parent.children.push(node);
      }
      else {
        if (!this.root) {
          this.root = node;
        }
        else {
          throw new Error("Cannot overwrite Root.");
        }
      }

      return node;
    }

    remove(data) {
      // Your code here...

      if(this.root.data === data) {
        this.root = null;
      }

      var queue = [this.root];

      while(queue.length) {
        var node = queue.shift();
        for(var i = 0; i < node.children.length; i++) {
          if(node.children[i].data === data) {
            node.children.splice(i, 1);
          } else {
            queue.push(node.children[i]);
          }
        }
      }
    }



    findBFS(data) {
      // Your code here...

      let queue = [this.root];
      while (queue.length) {
        let node = queue.shift();
        if (node.data == data) {
          return node;
        }

        for (let i=0; i<node.children.length; i++) {
          queue.push(node.children[i]);
        }
      }

      return null;
    }



    preOrder(node, callback) {
      // Your code here...

      if (node) {
        if (callback) {
          callback(node);
        }

        for (let i=0; i<node.children.length; i++) {
          this.preOrder(node.children.length[i], callback);
        }
      }
    }



    postOrder(node, callback) {
      //  Your code here...

      if(node) {
        for (let i=0; i<node.children.length; i++) {
          this.postOrder(node.children[i], callback);
        }

        if (callback) {
          callback(node);
        }
      }
    }



    traverseBFS(callback) {
      // Your code here...

      let queue = [this.root];

      while(queue.length) {
        let node = queue.shift();

        if(callback) {
          callback(node);
        }

        for(let i = 0; i < node.children.length; i++) {
          queue.push(node.children[i]);
        }
      }
    }



    traverseDFS(callback, how) {
      // Your code here...

      let current = this.root;
      if(how) {
        this[method](current, callback);
      } else {
        this._preOrder(current, callback);
      }
    }
  }


  return [Node, Tree];
};
