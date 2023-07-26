
class Solution:
    def strStr(self, haystack, needle):
        a = len(haystack)
        b = len(needle)
        if b == 0:
            return 0
        j = 0
        next = self.getNext(needle)
        print(next)
        for i in range(a):
            while j > 0 and haystack[i] != needle[j]:
                j = next[j-1]
            if haystack[i] == needle[j]:
                j += 1
            if j == b:
                return i - j + 1
        return -1
    # 得到next数组
    def getNext(self, needle):
        # next数组每一位表示模式串中最大相同前后缀的个数，aabaaf的next数组为[0,1,0,1,2,1]
        # j 代表相同最大前后缀的前缀的最后一位
        # i d代表相同最大前后缀后缀的最后一位
        # 当模式串第i和第j位相同时，i++ j++
        # 当模式串第i和第j位不相同时，j跳转到最大前后缀的前缀的后一位
        n = len(needle)
        next = [0] * n
        j = 0
        for i in range(1, n):
            while j > 0 and needle[j] != needle[i]:
                j = next[j-1]
            if needle[i] == needle[j]:
                j = j + 1
            next[i] = j
        return next
# 测试
s = Solution()
n = s.strStr('aabaabaaf', 'aabaaf')
print(n)

print([range(3)])