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
}

const tree = new BinarySearchTree();

tree.insert(1);
tree.insert(2);
tree.insert(0);
tree.insert(3);
tree.insert(-1);

console.log(tree);
console.log(tree.root.right.right);
console.log(tree.find(2));
