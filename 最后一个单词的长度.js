/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    str = /\s+/
    let list = s.trim().split(str)
    return list[list.length - 1].length
};