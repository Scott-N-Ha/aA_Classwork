function breadthFirstArray(root) {
  if (!root) return null;

  const queue = [root];
  let i = 0;

  while (i < queue.length){
    let current = queue[i++];

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  
  return queue.map(node => node.val);
}

module.exports = {
    breadthFirstArray
};