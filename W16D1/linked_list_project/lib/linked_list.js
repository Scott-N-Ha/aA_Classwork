// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.length += 1;

    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    let current = this.head;

    if (current === this.tail) {
      this.head = this.tail = null;
      this.length = 0;
      return this.current;
    }

    while (current !== null && current.next !== this.tail) {
      current = current.next;
    }

    if (current) {
      current.next = null;
      let temp = this.tail;
      this.tail = current;
      this.length -= 1;
      return temp;
    }
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) this.tail = this.head;
    this.length += 1;

    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    if (this.head) {
      if (this.length === 1) this.tail = null;
      let temp = this.head;
      this.head = this.head.next;
      this.length -= 1;
      // temp.next = null;
      return temp;
    }
  }

  // TODO: Implement the contains method here
  contains(target) {
    let found = false;

    let current = this.head;
    while(current !== null && !found){
      if (current.value === target) found = true;
      current = current.next;
    }

    return found;
  }

  // TODO: Implement the get method here
  get(index) {
    if (index >= this.length) return null;

    let current = this.head;
    let i = 0;

    while (current !== null && i < index) {
      i += 1;
      current = current.next;
    }

    return current ? current : null;
  }

  // TODO: Implement the set method here
  set(index, val) {
    if (index >= this.length) return false;

    let current = this.head;
    let i = 0;

    while (current !== null && i < index){
      i += 1;
      current = current.next;
    }

    if (current) {
      current.value = val;
      return true;
    } else {
      return false;
    }
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    if (index >= this.length) return false;

    let current = this.head;
    let i = 0;

    while (current !== null && i < index-1){
      i += 1;
      current = current.next;
    }

    if (current){
      const newNode = new Node(val);
      newNode.next = current.next;
      current.next = newNode;
      this.length += 1;

      return true;
    } else {
      return false;
    }
  }

  // TODO: Implement the remove method here
  remove(index) {
    if(index >= this.length) return undefined;

    let current = this.head;
    let i = 0;

    while(current !== null && i < index-1){
      i += 1;
      current = current.next;
    }

    if (current){
      let temp = current.next;
      if (current.next === this.tail) {
        this.tail = current;
        current.next = null;
      } else {
        current.next = current.next.next;
      }

      this.length -= 1;

      return temp;
    }
  }

  // TODO: Implement the size method here
  size() {
    return this.length;
  }

  print(){
    const vals = [];
    let current = this.head;

    while(current !== null){
      vals.push(current.value);
      current = current.next;
    }

    vals.push('null');

    console.log(vals.join(' -> '));
  }
}

const linkedList = new LinkedList();
linkedList.addToTail('A');
linkedList.addToTail('B');
linkedList.addToTail('C');
linkedList.print();
linkedList.remove(1);
linkedList.print();
linkedList.remove(1);
linkedList.print();

exports.Node = Node;
exports.LinkedList = LinkedList;