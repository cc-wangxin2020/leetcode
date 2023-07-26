class Solution(object):
    def stringMatching(self, words):
        """
        :type words: List[str]
        :rtype: List[str]
        """
        n = len(words)
        res = []
        for  i in range(0, n-1):
            for j in range(i + 1, n):
                num = -1
                if len(words[i]) < len(words[j]):
                    patten_word = words[i]
                    num = self.strStr(words[j], words[i])
                else:
                    patten_word = words[j]
                    num = self.strStr(words[i], words[j])
                if num > -1 and (patten_word not in res):
                    res.append(patten_word) 
        return res
                
    def strStr(self, main_word, patten_word):
        a = len(main_word)
        b = len(patten_word)
        if b == 0:
            return 0
        j = 0
        next = self.getNext(patten_word)
        for i in range(a):
            while j > 0 and main_word[i] != patten_word[j]:
                j = next[j - 1]
            if main_word[i] == patten_word[j]:
                j += 1
            if j == b:
                return i - j + 1
        return -1
            
    def getNext(self, str):
        n = len(str)
        next = [0] * n
        j = 0
        for i in range(1, n):
            while j > 0 and str[i] != str[j]:
                j = next[j - 1]
            if str[i] == str[j]:
                j += 1
            next[i] = j
        return next

s = Solution()
res = s.stringMatching(["leetcoder","leetcode","od","hamlet","am"])
print(res)