/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   let j=0
for(let i=1;i < nums.length;i++){
    if(nums[j] != nums[i]){
        j++
        nums[j] = nums[i] 
    }
}
nums.splice(j+1)
};