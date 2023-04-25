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

  depthFirstRecursive(startVertex) {
    const results = [];
    const visited = {};

    const dfs = (vertex) => {
      if (!vertex) return null;
      results.push(vertex);
      visited[vertex] = true;
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    };

    dfs(startVertex);

    return results;
  }

  depthFirstIterative(startVertex) {
    const stack = [startVertex];
    const result = [];
    const visited = {};
    visited[startVertex] = true;

    while (stack.length) {
      let currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  breadthFirstSearch(startVertex) {
    const queue = [startVertex];
    const results = [];
    const visited = {};
    visited[startVertex] = true;
    let currentVertex;

    while (queue.length) {
      currentVertex = queue.shift();
      results.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return results;
  }
}

const locations = new Graph();

locations.addVertex("A");
locations.addVertex("B");
locations.addVertex("C");
locations.addVertex("D");
locations.addVertex("E");
locations.addVertex("F");

locations.addEdge("A", "B");
locations.addEdge("A", "C");
locations.addEdge("B", "D");
locations.addEdge("C", "E");
locations.addEdge("D", "E");
locations.addEdge("D", "F");
locations.addEdge("E", "F");

console.log(locations.depthFirstRecursive("A"));
console.log(locations.depthFirstIterative("A"));
console.log(locations.breadthFirstSearch("A"));

console.log("🚀 ~ file: graph.js:12 ~ locations:", locations.adjacencyList);
