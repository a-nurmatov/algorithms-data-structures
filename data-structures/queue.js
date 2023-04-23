class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;

    let node = this.first;
    this.first = this.first.next;
    node.next = null;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }

    return node.value;
  }
}

const logQueue = new Queue();

logQueue.enqueue("Hello World");
logQueue.enqueue("Value");
logQueue.enqueue("Last");

console.log(logQueue.dequeue());
console.log(logQueue.dequeue());
console.log(logQueue.dequeue());
console.log(logQueue.dequeue());
console.log(logQueue);
