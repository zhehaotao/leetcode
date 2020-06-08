/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  var queue = [root];
  var output = [];
  var deep = 0;
  while (queue.length > 0){
    var len = queue.length;
    var curLevel = [];
    for (var i = 0; i < len; i++){
      var curValue = queue.shift();
      if (deep % 2 == 0) curLevel.push(curValue.val);
      else curLevel.unshift(curValue.val);
      if (curValue.left) queue.push(curValue.left);
      if (curValue.right) queue.push(curValue.right);
    }
    output.push(curLevel);
    deep ++;
  }
  return output;
};
// @lc code=end

