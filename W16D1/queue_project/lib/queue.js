// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val){
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.front = this.back = null;
    this.length = 0;
  }

  enqueue(val){
    const newNode = new Node(val);

    if (this.length === 0) this.front = this.back = newNode;
    else {
      this.back.next = newNode;
      this.back = this.back.next;
    }

    this.length += 1;

    return this.length;
  }

  dequeue(){
    if (this.length <= 0) return null;

    let temp = this.front;

    if (this.length === 1) this.front = this.back = null;
    else {
      this.front = this.front.next;
    }

    this.length -= 1;

    return temp.value;
  }

  size(){
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;