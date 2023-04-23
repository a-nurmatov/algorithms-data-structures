class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let node = this.first;
    this.first = this.first.next;
    node.next = null;
    this.size--;
    if (this.size === 0) {
      this.first = null;
      this.last = null;
    }
    return node.value;
  }
}

const numStack = new Stack();

numStack.push(1);
numStack.push(2);
numStack.push(3);
// console.log(numStack);

console.log(numStack.pop());
console.log(numStack.pop());
console.log(numStack.pop());
console.log(numStack.pop());
