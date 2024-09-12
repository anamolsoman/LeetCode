/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
     if (nums1.length > nums2.length) return intersection(nums2, nums1)
	let set = new Set(nums1), ans = new Set()
	for (let num of nums2) if (set.has(num)) ans.add(num);
	return [...ans]
};