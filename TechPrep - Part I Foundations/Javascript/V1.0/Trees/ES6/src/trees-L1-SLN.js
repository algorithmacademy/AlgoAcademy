
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
      // Your code here...

      let node = new Node(data);

      if(!this.root) {
        this.root = node;
      }
      else {
        let current = this.root;

        while(current) {
          if(node.data < current.data) {
            if(!current.left) {
              current.left = node;
              break;
            }
            current = current.left;
          }
          else if (node.data > current.data) {
            if(!current.right) {
              current.right = node;
              break;
            }
            current = current.right;
          }
          else {
            break;
          }
        }
      }
    };



    addRecursive(data) {
      // TBD
    }


    remove(data) {
      // Your code here...

      let recurse = (node, data) => {
        if(!node) {
          return null;
        }

        if(data === node.data) {
          if(!node.left && !node.right) {
            return null;
          }

          if(!node.left) {
            return node.right;
          }

          if(!node.right) {
            return node.left;
          }

          let minValue = this.getMinValue(node.right);

          node.data = minValue;
          node.right = recurse(node.right, minValue);

          return node;
        }
        else if(data < node.data) {
          node.left = recurse(node.left, data);
          return node;
        }
        else {
          node.right = recurse(node.right, data);
          return node;
        }
      };

      this.root = recurse(this.root, data);
    };



    preOrder(node, callback) {
      // Your code here...

      if(node) {
        if(callback) {
          callback(node);
        }

        this.preOrder(node.left, callback);
        this.preOrder(node.right, callback);
      }
    };



    postOrder(node, callback) {
      // Your code here...

      if(node) {
        this.postOrder(node.left, callback);
        this.postOrder(node.right, callback);

        if(callback) {
          callback(node);
        }
      }
    };



    inOrder(node, callback) {
      // Your code here...

      if(node) {
        this.inOrder(node.left, callback);

        if(callback) {
          callback(node);
        }

        this.inOrder(node.right, callback);
      }
    };



    contains(data) {
      // Your code here...

      let current = this.root;

      while(current) {
        if(data === current.data) {
          return true;
        }
        if(data < current.data) {
          current = current.left;
        }
        else {
          current = current.right;
        }
      }

      return false;
    };



    traverseDFS(callback) {
      // Your code here...

      let current = this.root;
      this.preOrder(current, callback);
    };


    traverseDFSStacky(callback) {
      // Your code here

      let stackList = [];
      stackList.push(this.root);

      while (stackList.length) {
        let current = stackList.pop();
        console.log(current.data);

        if (callback) {
          callback(current);
        }

        if (current.right) {
          stackList.push(current.right);
        }

        if (current.left) {
          stackList.push(current.left);
        }
      }
    }


    // isProperBinaryTree

    // isBalanced

    // re-balance


    traverseBFS(callback) {
      // Your code here...

      this.queue = [];
      this.queue.push(this.root);

      while (this.queue.length) {
        let node = this.queue.shift();

        if (callback) {
          callback(node);
        }

        if (node.left) {
          this.queue.push(node.left);
        }

        if (node.right) {
          this.queue.push(node.right);
        }
      }
    };



    getHeight(node = this.root) {
      //  Your code here...

      if (!node) {
        return null;
      }

      let left = this.getHeight(node.left);
      let right = this.getHeight(node.right);

      return Math.max(left, right) + 1;
    }



    getMinDepth(node = this.root) {
      // Your code here...

      if (!node) {
        return 0;
      }

      let left = this.getMinDepth(node.left);
      let right = this.getMinDepth(node.right);

      if (left === 0) {
        return 1 + right;
      }
      else if (right === 0) {
        return 1 + left;
      }

      return Math.min(left, right) + 1;
    }



    getMinValue(node) {
      // Your code here...

      if(!node) {
        node = this.root;
      }

      while(node.left) {
        node = node.left;
      }

      return node.data;
    };



    getMaxValue(node) {
      // Your code here...

      if(!node) {
        node = this.root;
      }

      while(node.right) {
        node = node.right;
      }

      return node.data;
    };



    getLevel(level, node=this.root) {
      // Your code here...

      let map = [];

      function recurse(level, node) {
        if (!map[level]) {
          map[level] = [];
        }

        map[level].push(node.data);

        if (node.left != null) {
          recurse(level + 1, node.left);
        }

        if (node.right != null) {
          recurse(level + 1, node.right);
        }
      }

      recurse(level, node);
      return [map, map[level]];
    }



    getNodeCount(node=this.root) {
      // Your code here...

      if (!node) {
        return 0;
      }

      let count = 0;

      this.preOrder(node, (n) => { count += 1; });

      return count;
    }
  }

  return [Node, BST];
};
