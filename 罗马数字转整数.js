/**
 * 思路：代表数值小的字母在左边，右边数值-左边数值
 *      代表数值小的字母在右边，右边数值+左边数值
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let data = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000, null: 0 }
    let temp = 0
    let i;
    for (i = 0; i < s.length - 1; i++) {
        if (data[s[i]] >= data[s[i + 1]]) {
            temp += data[s[i]]
        } else {
            temp += (data[s[i + 1]] - data[s[i]])
            i++
        }
    }
    if (i < s.length) {
        temp += data[s[s.length - 1]]
    }
    return temp
};