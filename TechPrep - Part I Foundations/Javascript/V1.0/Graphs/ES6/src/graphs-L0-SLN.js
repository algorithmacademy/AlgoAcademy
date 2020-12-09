
let L0 = function() {

  class Graph {
    constructor() {
      this.vertices = [];
      this.edges = [];

      this.vertexCount = 0;
      this.edgeCount = 0;
    }



    addVertex(vertex) {
      this.vertices.push(vertex);
      this.edges[vertex] = [];

      this.vertexCount += 1;
    }



    addEdge(v1, v2, directed = false) {
      this.edges[v1].push(v2);

      if (!directed) {
        this.edges[v2].push(v1);
      }

      this.edgeCount += 1;
    }



    removeVertex(vertex) {
      let index = this.vertices.indexOf(vertex);

      if (index >= 0) {
        this.vertices.splice(index, 1);
      }

      while(this.edges[vertex].length) {
        let v = this.edges[vertex].pop();
        this.removeEdge(v, vertex);
      }
    }



    removeEdge(v1, v2) {
      let iv1 = this.edges[v1] ? this.edges[v1].indexOf(v2) : -1;
      let iv2 = this.edges[v2] ? this.edges[v2].indexOf(v2) : -1;

      if (~iv1) {
        this.edges[v1].splice(iv1, 1);
        this.edgeCount -= 1;
      }

      if (~iv2) {
        this.edges[v2].splice(iv2, 1);
      }
    }



    contains(vertex) {
      return this.vertices.indexOf(vertex) >= 0;
    }



    traverseDFS(vertex, callback) {
      if (this.vertices.indexOf(vertex) < 0) {
        throw new Error("Vertex not found.");
      }

      let visited = [];

      let dfs = (vertex, visited, callback) => {
        visited[vertex] = true;

        if (this.edges[vertex] != undefined) {
          callback(vertex);
        }

        for (let i=0; i<this.edges[vertex].length; i++) {
          if (!visited[this.edges[vertex][i]]) {
            dfs(this.edges[vertex][i], visited, callback);
          }
        }
      };

      dfs(vertex, visited, callback);
    }



    traverseDFS_Iterative(vertex, callback) {
      // Your code here
      let stackList = [];
      let visited = [];
      stackList.push(vertex);
      while (stackList.length) {
        let currentVertex = stackList.pop();

        for (let i = this.edges[currentVertex].length - 1; i > -1; i--) {
          if (!visited[this.edges[currentVertex][i]]) {
            stackList.push(this.edges[currentVertex][i]);
            visited[this.edges[currentVertex][i]] = true;
          }
        }
        console.log(currentVertex, stackList);
      }
    }



    findPath(from, to) {
      if(this.vertices.indexOf(from) < 0) {
        return null;
      }

      let queue = [];
      queue.push(from);

      let visited = [];
      visited[from] = true;

      let paths = [];

      while(queue.length) {
        let vertex = queue.shift();

        for(let i=0; i<this.edges[vertex].length; i++) {
          if(!visited[this.edges[vertex][i]]) {
            visited[this.edges[vertex][i]] = true;
            queue.push(this.edges[vertex][i]);

            paths[this.edges[vertex][i]] = vertex;
          }
        }
      }

      if(!visited[to]) {
        return undefined;
      }

      let path = [];

      for(var j=to; j != from; j=paths[j]) {
        path.push(j);
      }

      path.push(j);

      return path.reverse().join(" -> ");
    };



    toString() {
      let result = (this.vertices.map(function(vertex) {
        return (vertex + ' -> ' + this.edges[vertex].join(', ')).trim();
      }, this).join(' | '));

      return result;
    }
  } // class Graph { ...

  return Graph;
};
