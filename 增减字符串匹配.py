class Solution(object):
    def diStringMatch(self, s):
        """
        :type s: str
        :rtype: List[int]
        """
        # 冒泡排序
        # n = len(s)
        # perm = [i for i in range(n+1)]
        # for i in range(n):
        #     for j in range(0, n):
        #         if s[j] == 'I' and perm[j] > perm[j + 1]:
        #             perm[j], perm[j+1] = perm[j + 1], perm[j]
        #         if s[j] == 'D' and perm[j] < perm[j + 1]:
        #             perm[j], perm[j+1] = perm[j + 1], perm[j]
        # return perm
        # 贪心算法
        n =len(s)
        perm = ['' for i in range(n+1)]
        x, y = 0, n
        for i in range(n):
            if s[i] == 'D':
                perm[i] = y
                y -= 1
            if s[i] == 'I':
                perm[i] = x
                x += 1
        perm[n] = x
        return perm