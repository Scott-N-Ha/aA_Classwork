function treeHeight(root) {
  if (!root) return -1;
  if (root) return 0;

  const left = treeHeight(root.left);
  const right = treeHeight(root.right);

  return Math.max((left <= 0 ? 0 : left), (right <= 0 ? 0 : right)) + 1;
}


module.exports = {
  treeHeight
};