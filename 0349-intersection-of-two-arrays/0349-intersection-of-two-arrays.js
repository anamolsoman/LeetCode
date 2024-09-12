/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 

var intersection = function(nums1, nums2) {
    if(nums1.length > nums2.length) intersection(nums2,nums1)
    console.log(nums1,nums2)
    let pointer = 0
    let pointer2 = 0
    let ans = []

    while(pointer < nums1.length){
        if(nums1[pointer] === nums2[pointer2] && !ans.includes(nums1[pointer])){
            ans.push(nums1[pointer])
            pointer++
            pointer2 = 0
        }else{
            if(pointer2 < nums2.length){
                       pointer2++
            }else{
                pointer++
                pointer2=0
            }
       
        }
    }


    return ans
};