/*
 * @lc app=leetcode id=971 lang=javascript
 *
 * [971] Flip Binary Tree To Match Preorder Traversal
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
 * @param {number[]} voyage
 * @return {number[]}
 */

var flipMatchVoyage = function(root, voyage) {
  let flipped = [];
  let index = 0;
  const DFS = (v) => {
    if (v) {
      if (v.val != voyage[index]) {
        flipped = [-1];
        return;
      }
      index++;
      if (index < voyage.length && v.left && v.left.val != voyage[index]) {
        flipped.push(v.val);
        DFS(v.right);
        DFS(v.left);
      }
      else {
        DFS(v.left);
        DFS(v.right);
      }
    }
  }
  DFS(root);
  return flipped;
};

// @lc code=end

