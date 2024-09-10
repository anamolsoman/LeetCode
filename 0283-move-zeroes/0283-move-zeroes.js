/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pointerA = 0;
    let pointerB = 0;

    while (pointerB < nums.length) {
        if (nums[pointerB] !== 0) {
            let temp = nums[pointerA];
            nums[pointerA] = nums[pointerB];
            nums[pointerB] = temp;
            pointerA++;
        }
        pointerB++;
    }
 
 return nums;
};