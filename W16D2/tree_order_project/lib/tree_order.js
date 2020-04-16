function inOrderArray(root) {
  if (!root) return [];

  const left = inOrderArray(root.left);
  const right = inOrderArray(root.right);
  
  return [].concat(left, [root.val], right);
}

function postOrderArray(root) {
  if (!root) return [];
  
  const left = inOrderArray(root.left);
  const right = inOrderArray(root.right);
  
  return [].concat(left, right, [root.val]);
}


module.exports = {
  inOrderArray,
  postOrderArray
};