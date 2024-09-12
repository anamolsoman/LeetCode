/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
       const n1 = new Set(nums1)
    const n2 = new Set(nums2)
    const res = []

    for (const num of n1) {
        if (n2.has(num)) res.push(num)
    }

    return res
};