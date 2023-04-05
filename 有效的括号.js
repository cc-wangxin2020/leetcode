/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 1. 左括号必须用相同类型的右括号闭合。
 * 2. 左括号必须以正确的顺序闭合。
 * 3. 每个右括号都有一个对应的相同类型的左括号。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 *  */

/**
 * @param {string} s
 * @return {boolean}
 *  */

var isvaild = function(s) {
    if (s === '') return true
    let temp = ''
    let arr = ['(', '{', '[']
    for (let i = 0; i < s.length; i++) {
        if (arr.indexOf(s[i]) !== -1) {
            temp += s[i]
        } else {
            if (s[i] === ')') {
                if (temp[temp.length - 1] !== '(') {
                    return false
                } else {
                    temp = temp.substring(0, temp.length - 1)
                }
            } else if (s[i] === '}') {
                if (temp[temp.length - 1] !== '{') {
                    return false
                } else {
                    temp = temp.substring(0, temp.length - 1)
                }
            } else if (s[i] === ']') {
                if (temp[temp.length - 1] !== '[') {
                    return false
                } else {
                    temp = temp.substring(0, temp.length - 1)
                }
            }
        }

    }
    return temp === '' ? true : false
}
console.log(isvaild('())'));
// 上述代码简化
var isvaild1 = function(s) {
    let stack = []
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i])
        } else {
            let last = stack.pop()
            if (s[i] !== map[last]) {
                return false
            }
        }
    }
    return stack.length === 0
}


// 更优雅的方法
var isvaild2 = function(s) {
    let length = s.length / 2
    for (let i = 0; i < length; i++) {
        s = s.replace('()', '').replace('{}', '').replace('[]', '')
    }
    return s === '' ? true : false
}
console.log(isvaild2('(({()}{}[])()))'));