/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0
    let lastNonZeroFound = 0
    while(left < nums.length){
        if(nums[left] != 0){
            let temp 
            temp = nums[left]
            nums[left] = nums[lastNonZeroFound]
            nums[lastNonZeroFound] = temp
            lastNonZeroFound++
        }
            left++
        
    }
    return nums
};