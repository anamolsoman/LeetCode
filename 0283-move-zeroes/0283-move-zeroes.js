/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0
    let right = 0

    function swap(i, j) {
        const temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }

    while (right < nums.length) {
        if (nums[right] !== 0) {
            swap(left, right)
            left++
        }

        right++
    }
};
