/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0; // Pointer to place the next non-zero element
    
    // Step 1: Move non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            j++;
        }
    }
    
    // Step 2: Fill the remaining positions with zeros
    for (let i = j; i < nums.length; i++) {
        nums[i] = 0;
    }
};
