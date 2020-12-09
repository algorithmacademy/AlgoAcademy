let L0 = function() {

  class Graph {
    constructor() {
      this.vertices = [];
      this.edges = [];

      this.vertexCount = 0;
      this.edgeCount = 0;
    }



    addVertex(vertex) {
      // Your code here
      this.vertices.push(vertex);
      this.vertexCount++;
    }



    addEdge(v1, v2, directed = false) {
      // Your code here
      this.vertices.push([v1, v2], [v2, v1]);
      this.edgeCount++;
    }



    removeVertex(vertex) {
      // Your code here
      for(let i = 0; i < this.vertices.length; i++){
        if( this.vertices[i] === vertex ){
          this.vertices.slice(i, 1);
        }
      }
      this.vertexCount--;
    }



    removeEdge(v1, v2) {
      // Your code here
      for(let i = 0; i < this.edges.length; i++){
        let tuple = this.edges[i];
        if( tuple[0] === v1 && tuple[1] === v2 ){
          this.edges.slice(i, 1);
        }
      }
      this.edgeCount--;

    }



    contains(vertex) {
      // Your code here
      for(let i = 0; i < this.vertices.length; i++){
        if( this.vertices[i] === vertex ){
          return true;
        }
      }
      return false;
    }



    traverseDFS(vertex, callback) {
      // Your code here
    }



    findPath(from, to) {
      // Your code here
    }



    toString() {
      if (this.edges && this.edges.length > 0) {
        return this.edges.toString();
      }

      return "";

//      let result = (this.vertices.map(function(vertex) {
//        return (vertex + ' -> ' + this.edges[vertex].join(', ')).trim();
//      }, this).join(' | '));
//
//      return result;
    }
  } // class Graph { ...

  return Graph;
};