/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
        let left = 0
        let right = 0
        while(left < nums.length){
            if(nums[left] !== 0){
                // swap
                let temp
                temp = nums[left]
                nums[left] = nums[right]
                nums[right] = temp
                right++
            }
            left++
            
        }
};