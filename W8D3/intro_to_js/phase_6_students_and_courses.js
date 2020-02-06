class Student {
  constructor(first, last) {
    this.first = first; 
    this.last = last; 
    this.classes = [];
  }

  name() {
    return `${this.first} ${this.last}`;
  }

  enroll(class) {
    this.classes.push(class);
  }
}