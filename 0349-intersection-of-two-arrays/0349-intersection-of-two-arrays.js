/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
    let smallArr = nums1.length <= nums2.length ? nums1 : nums2
    let largeArr = nums1.length > nums2.length ? nums1 : nums2
    console.log(smallArr,largeArr)
    let pointer = 0
    let pointer2 = 0
    let intersection = []

    while(pointer < smallArr.length){
        if(smallArr[pointer] === largeArr[pointer2] && !intersection.includes(smallArr[pointer])){
            intersection.push(smallArr[pointer])
            pointer++
            pointer2 = 0
        }else{
            if(pointer2 < largeArr.length){
                       pointer2++
            }else{
                pointer++
                pointer2=0
            }
       
        }
    }


    return intersection
};