/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
*1. It doesn't matter whether is sorted or not because we only need one peak
*2. nums have one peak at least
*/
var findPeakElement = function(nums) {
  let left = 0;
  let right = nums.length-1;
  while (left < right) {
    let mid = Math.floor((left+right)/2);
    if (nums[mid] > nums[mid+1]) right = mid;
    else left = mid + 1;
  }
  return left;
};
// @lc code=end

