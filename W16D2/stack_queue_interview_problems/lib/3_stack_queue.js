// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
  constructor(val){
    this.value = val;
    this.next = null;
  }
}

class Stack {
    // TODO: Implement the Stack class!
  constructor(){
    this.top = this.bottom = null;
    this.length = 0;
  }

  push(val){
    const newNode = new Node(val);

    if (this.length <= 0) {
      this.top = this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    return ++this.length;
  }

  pop(){
    if (this.length <= 0) return null;

    const temp = this.top;

    if (this.length === 1){
      this.top = this.bottom = null;
    } else {
      this.top = this.top.next;
    }

    this.length--;
    return temp;
  }

  size(){
    return this.length;
  }
}

class StackQueue {
    // TODO: Implement the StackQueue class!
  constructor(){
    this.inStack = new Stack();
    this.outStack = new Stack();
    this.front = this.back = null;
    this.length = 0;
  }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
