/*
 * @lc app=leetcode id=154 lang=javascript
 *
 * [154] Find Minimum in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let Minimum = Infinity;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    mid = Math.floor((left+right)/2);
    while (left < mid && nums[left] == nums[mid]) {
      left += 1;
    } 
    if (nums[left] <= nums[mid]) {
      Minimum = Math.min(Minimum,nums[left]);
      left = mid + 1;
    } else {
      Minimum = Math.min(Minimum,nums[mid]);
      right = mid - 1;
    }
  }
  return Minimum;
};
// @lc code=end

