class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    let index = this.values.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent < element) {
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
      }
    }
    return this.values;
  }

  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    this.values[0] = end;
    if (this.values.length > 0) {
      this.sinkDown();
    }

    return max;
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
        if (leftChild > parent) swap = leftChildIdx;
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > parent) ||
          (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();

heap.insert(1);
heap.insert(3);
heap.insert(7);
heap.insert(20);
heap.insert(44);
heap.insert(55);
console.log(heap.extractMax());
console.log(heap.values);
