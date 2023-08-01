# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        def height(root: TreeNode) -> int:
            if not root:
                return 0
            leftHeight = height(root.left)
            rightHeight = height(root.right)
            if leftHeight == -1 or rightHeight == -1 or abs(leftHeight - rightHeight) > 1:
                return -1
            else:
                return max(leftHeight, rightHeight) + 1

        return height(root) >= 0
    
def createTree(root, lis):
    if len(lis) == 0:
        return root
    root = TreeNode(lis.pop(0))
    root.left = createTree(root.left, lis)
    root.right = createTree(root, lis)
    return root
        
root = createTree(None, [3,9,20,None,None,15,7]) 
print(root)
s = Solution()
res = s.isBalanced(root)      
print(res)