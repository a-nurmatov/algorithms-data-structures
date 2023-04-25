class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(element, priority) {
    let node = new Node(element, priority);
    this.values.push(node);
    let index = this.values.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent.priority > node.priority) {
        this.values[parentIndex] = node;
        this.values[index] = parent;
        index = parentIndex;
      }
    }
    return this.values;
  }

  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    this.values[0] = end;
    if (this.values.length > 0) {
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    let parentIdx = 0;
    let length = this.values.length;
    let parent = this.values[0];

    while (true) {
      let leftChildIdx = parentIdx * 2 + 1;
      let rightChildIdx = parentIdx * 2 + 2;
      let leftChild, rightChild;

      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < parent.priority) swap = leftChildIdx;
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < parent.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        )
          swap = rightChildIdx;
      }

      if (swap === null) break;
      this.values[parentIdx] = this.values[swap];
      this.values[swap] = parent;
      parentIdx = swap;
    }
  }
}

const patients = new PriorityQueue();

patients.enqueue("Low fewer", 5);
patients.enqueue("Tooth ache", 4);
patients.enqueue("Injuries", 2);
patients.enqueue("Head explosion", 1);

console.log(patients.dequeue());
console.log(patients.dequeue());
console.log(patients.dequeue());
console.log(patients.values);
