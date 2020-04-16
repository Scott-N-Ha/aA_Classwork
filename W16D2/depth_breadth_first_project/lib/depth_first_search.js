function depthFirstSearch(root, targetVal) {
  if (!root) return null;

  const stack = [root];
  let found = false;

  while (!found && stack.length > 0){
    let current = stack.pop();

    if (current.val === targetVal) found = current;
    else {
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
  }

  return found ? found : null;
}


module.exports = {
    depthFirstSearch
};