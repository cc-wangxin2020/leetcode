/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str1 = x.toString()
    let arr = str1.split('')
        // let str2 = arr.reverse().join('')
        // return str1 == str2
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - i - 1]) {
            return false
        }
    }
    return true
};