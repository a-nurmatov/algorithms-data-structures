class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    let shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }

    this.length--;
    return shiftedNode;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    const middle = Math.floor(this.length / 2);
    let node;
    if (index <= middle) {
      node = this.head;
      for (let i = 0; i !== index; i++) node = node.next;
    } else {
      node = this.tail;
      for (let i = this.length - 1; i !== index; i--) node = node.prev;
    }
    return node;
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let beforeNode = this.get(index - 1);
    let newNode = new Node(value);
    let afterNode = beforeNode.next;
    newNode.next = afterNode;
    newNode.prev = beforeNode;
    beforeNode.next = newNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    let node = this.get(index);
    let beforeNode = node.prev;
    let afterNode = node.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    node.next = null;
    node.prev = null;
    this.length--;
    return true;
  }

  print() {
    let node = this.head;
    for (let i = 0; i < this.length; i++) {
      console.log("<-", node.value, "->");
      node = node.next;
    }
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = node.prev;
      node.prev = next;
      node = next;
    }
  }
}

// 1 -> 2 3 4
//   <-
let doublyList = new DoublyLinkedList();

doublyList.push("Hi");
doublyList.push("All");
doublyList.push("Bye");
console.log(doublyList.length);
// console.log(doublyList.pop());
// console.log(doublyList.pop());
// console.log(doublyList.shift());
// console.log(doublyList.shift());
// doublyList.unshift("Home");
// doublyList.unshift("Alone");

// console.log(doublyList.insert(1, "Woooow"));
// doublyList.remove(1);
// console.log(doublyList.get(1));
// console.log(doublyList);
doublyList.reverse();
doublyList.print();
console.log(doublyList);
