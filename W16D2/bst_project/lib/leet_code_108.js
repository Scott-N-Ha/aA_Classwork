// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function sortedArrayToBST(nums) {
  if (nums.length <= 0) return null;

  const mid = Math.floor(nums.length/2);
  const left = sortedArrayToBST(nums.slice(0,mid));
  const right = sortedArrayToBST(nums.slice(mid+1));

  const newNode = new TreeNode(nums[mid]);
  if (left) newNode.left = left;
  if (right) newNode.right = right;

  return newNode;
}

const a = [-10,-3,0,5,9];
console.log(sortedArrayToBST(a));