/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  var queue = [root,root];
  while (queue.length > 0) {
    var [l,r] = [queue.shift(),queue.shift()];
    if (!l && !r) continue;
    if (!!l !== !!r || l.val !== r.val) return false;
    queue.push(l.left,r.right,l.right,r.left);
  }
  return true;
};
// @lc code=end

