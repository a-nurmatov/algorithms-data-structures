class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(newValue) {
    let newNode = new Node(newValue);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let node = this.root;

    while (true) {
      let nodeValue = node.value;

      if (nodeValue === newValue) return undefined;

      if (nodeValue > newValue) {
        if (!node.left) {
          node.left = newNode;
          return this;
        }
        node = node.left;
      } else if (nodeValue < newValue) {
        if (!node.right) {
          node.right = newNode;
          return this;
        }
        node = node.right;
      }
    }
  }

  find(searchValue) {
    if (!this.root) return null;
    let node = this.root;
    while (node) {
      let nodeValue = node.value;

      if (nodeValue > searchValue) node = node.left;
      else if (nodeValue < searchValue) node = node.right;
      else return node;
    }
    return null;
  }

  BFS() {
    let queue = [];
    let visited = [];
    queue.push(this.root);

    while (queue.length) {
      let node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  DFSPreOrder() {
    let visited = [];
    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  DFSPostOrder() {
    let visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(this.root);
    return visited;
  }

  DFSInOrder() {
    let visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

//    10
//  6   15
// 3 8    20

// console.log(tree);
// console.log(tree.root.right.right);
// console.log(tree.find(2));
// console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
