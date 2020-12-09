
describe("Graphs &mdash; Introduction", () => {
  let Graph;
  let graph;

  before(() => {
    Graph = L0();
    graph = new Graph();
  });

  describe("Initialize", () => {
    it("graph should not be null", () => {
      expect(graph).to.not.equal(null);
    });
  });

  describe("Use the graph", () => {
    it("TEST NOT COMPLETE OR PROPER AT THIS POINT", () => {
      var graph = new Graph();
      graph.addVertex(1);
      graph.addVertex(2);
      graph.addVertex(3);
      graph.addVertex(4);
      graph.addVertex(5);
      graph.addVertex(6);
      let output = graph.toString(); // 1 -> | 2 -> | 3 -> | 4 -> | 5 -> | 6 ->
      console.log(output);
      graph.addEdge(1, 2);
      graph.addEdge(1, 5);
      graph.addEdge(2, 3);
      graph.addEdge(2, 5);
      graph.addEdge(3, 4);
      graph.addEdge(4, 5);
      graph.addEdge(4, 6);
      output = graph.toString(); // 1 -> 2, 5 | 2 -> 1, 3, 5 | 3 -> 2, 4 | 4 -> 3, 5, 6 | 5 -> 1, 2, 4 | 6 -> 4

      let verticeCount = graph.vertexCount; // 6
      let edgeCount = graph.edgeCount; // 7;

      output = "";
      graph.traverseDFS(1, (vertex) => { output += vertex; }); // => 1 2 3 4 5 6

      try {
        output = "";
        graph.traverseDFS(0, (vertex) => { output += vertex; }); // => "Vertex not found" error
      }
      catch (e) {
        output = e.message;
      }


      output = "path from 6 to 1:" + graph.findPath(6, 1).toString(); // => 6-4-5-1
      output = "path from 3 to 5:" + graph.findPath(3, 5).toString(); // => 3-2-5

      graph.removeEdge(1, 2);
      graph.removeEdge(4, 5);
      graph.removeEdge(10, 11);

      output = "graph edges:" + graph.edgeCount; // => 5
      output = "path from 6 to 1:" + graph.findPath(6, 1).toString(); // => 6-4-3-2-5-1

      graph.addEdge(1, 2);
      graph.addEdge(4, 5);

      output = "graph vertices:" + graph.vertexCount; // => 7
      output = "path from 6 to 1:" + graph.findPath(6, 1).toString(); // => 6-4-5-1

      graph.removeVertex(5);

      output = "graph vertices:" + graph.vertexCount; // => 5
      output = "graph edges:" + graph.edgeCount; // => 4

      output = "path from 6 to 1:" + graph.findPath(6, 1); // => 6-4-3-2-1
    });
  });
});