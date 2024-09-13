/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var reverse = function(arr,start,end){
console.log(arr,start,end)
    while(start < end){
        let temp
        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
}
var rotate = function(nums, k) {
    let n = nums.length 
    k = k % n; // This ensures k is within the range of the array's length
    reverse(nums, 0, n - 1);      // Reverse the entire array
    reverse(nums, 0, k - 1);      // Reverse the first k elements
    reverse(nums, k, n - 1);      // Reverse the remaining elements
    
    // nums = reverse(revArr,k+1,n)


};