// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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

class Stack {
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

    this.length += 1;

    return this.length;
  }

  pop(){
    if (this.length <= 0) return null;

    let temp = this.top;

    if (this.length === 1) {
      this.top = this.bottom = null;
    } else {
      this.top = this.top.next;
    }

    this.length -= 1;

    return temp.value;
  }

  size(){
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
