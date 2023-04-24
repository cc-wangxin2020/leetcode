/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while (true) {
        if (target < nums[right] && target > nums[left]) {
            if (left !== right - 1) {
                let mid = Math.floor((left + right) / 2)
                if (nums[mid] == target) {
                    return mid
                } else if (nums[mid] < target) {
                    left = mid
                } else if (nums[mid] > target) {
                    right = mid
                }
            } else {
                return left + 1
            }
        } else if (target <= nums[left]) {
            return left
        } else {
            return nums[right] == target ? right : right + 1
        }
    }
    // 优雅版本
    // if(nums.indexOf(target) !== -1){
    //     return nums.indexOf(target)
    // }
    // for(let i = 0; i<nums.length;i++){
    //     if(nums[i]>target){
    //         return i
    //     }
    // }
    // return nums.length
};
let i = searchInsert([1, 3], 3)
console.log(i);