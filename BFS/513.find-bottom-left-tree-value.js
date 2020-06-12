/*
 * @lc app=leetcode id=513 lang=javascript
 *
 * [513] Find Bottom Left Tree Value
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  const queue = [root];
  let output;
  while (queue.length) {
    const curNode = queue.shift();
    output = curNode.val;
    if (curNode.right) queue.push(curNode.right);
    if (curNode.left) queue.push(curNode.left);
  }
  return output;
};
// @lc code=end

