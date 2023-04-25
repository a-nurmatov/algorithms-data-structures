class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1])
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
    if (this.adjacencyList[vertex2])
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

const locations = new Graph();

locations.addVertex("A");
locations.addVertex("B");
locations.addVertex("C");

locations.addEdge("A", "B");
locations.addEdge("A", "C");
locations.addEdge("B", "C");

console.log("🚀 ~ file: graph.js:36 ~ locations:", locations.adjacencyList);

locations.removeEdge("A", "C");
console.log("🚀 ~ file: graph.js:12 ~ locations:", locations.adjacencyList);
locations.removeVertex("A");

console.log("🚀 ~ file: graph.js:12 ~ locations:", locations.adjacencyList);
