
# #  Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# # 递归实现
# class Solution(object):
#     def isSymmetric(self, root):
#         """
#         :type root: TreeNode
#         :rtype: bool
#         """
#         if not root:
#             return True
#         return self.dfs(root.left, root.right)

#     def dfs(self, left, right):
#         if not left and not right:
#             return True
#         if not left or not right:
#             return False
#         if(left.val != right.val):
#             return False
#         return self.dfs(left.left, right.right) and self.dfs(left.right, right.left)
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if not root:
            return True
        if not root.left and not root.right:
            return True
        queue = [root.left, root.right]
        while queue:
            left = queue.pop(0)
            right = queue.pop(0)
            if not left and not right:
                continue
            if not left or not right:
                return False
            if left.val != right.val:
                return False
            queue.append(left.left)
            queue.append(right.right)
            queue.append(left.right)
            queue.append(right.left)
        return True
root = [9,-42,-42,'',76,76,'','',13,'',13]
t = TreeNode(root)
s = Solution(t)
print(s.isSymmetric(t))
    