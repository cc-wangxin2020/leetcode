/**
 * 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和
 *  */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // let temp = 0
    // a = a.split('').map(i => i * 1)
    // b = b.split('').map(i => i * 1)
    // let c = []
    // let i = a.length - 1
    // let j = b.length - 1
    // while (true) {
    //     if (a[i] != undefined && b[j] != undefined) {
    //         let count = a[i] + b[j] + temp
    //         if (count >= 2) {
    //             c.unshift(count % 2)
    //             temp = 1
    //         } else {
    //             temp = 0
    //             c.unshift(count)
    //         }
    //         i--
    //         j--
    //     } else if (a[i] != undefined) {
    //         let count = a[i] + temp
    //         if (count >= 2) {
    //             c.unshift(count % 2)
    //             temp = 1
    //         } else {
    //             temp = 0
    //             c.unshift(count)
    //         }
    //         i--
    //     } else if (b[j] != undefined) {
    //         let count = b[j] + temp
    //         if (count >= 2) {
    //             c.unshift(count % 2)
    //             temp = 1
    //         } else {
    //             temp = 0
    //             c.unshift(count)
    //         }
    //         j--
    //     } else {
    //         if (temp == 1) {
    //             c.unshift(1)
    //         }
    //         return c.join('')
    //     }
    // }
    // 优雅写法
    // let a1 = '0b' + a
    // let b1 = '0b' + b
    // let sum = BigInt(a1) + BigInt(b1)
    // console.log(BigInt(a1), BigInt(b1));
    // return sum.toString(2)
    a = Number('0b' + a)
    b = Number('0b' + b)
    console.log(a, b);
    return (a + b).toString(2)
};


console.log(addBinary('101', '11'));