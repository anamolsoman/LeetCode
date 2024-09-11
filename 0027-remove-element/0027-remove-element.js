/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0
    let right = 0

    while(left < nums.length){
        if(nums[left] !== val){
            let temp 
            temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            right++
            
        }
        left++
    }
    nums.splice(right)
};