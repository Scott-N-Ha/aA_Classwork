class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


class BST {
  constructor(){
    this.root = null;
  }

  insert(val){
    const newNode = new TreeNode(val);

    if (!this.root){
      this.root = newNode;
    } else {
      let current = this.root;
      let searching = true;

      while(searching && current !== null) {
        if (val < current.val){
          if (current.left) current = current.left;
          else {
            current.left = newNode;
            searching = false;
          }
        } else {
          if (current.right) current = current.right;
          else {
            current.right = newNode;
            searching = false;
          }
        }
      }
    }
  }

  searchRecur(val){
    if (!this.root) return false;

    if (this.root.val === val) return true;
    // else return this.searchRecur()
  }

  searchIter(val){
    if (!this.root) return false;

    let current = this.root;
    let found = false;

    while (!found && current !== null){
      if (current.val === val) found = true;
      else current = current.val > val ? current.left : current.right;
    }

    return found;
  }
}

module.exports = {
  TreeNode,
  BST
};