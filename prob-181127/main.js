/* 
This problem was asked by Google.

A unival tree(which stands for "universal value") is a tree 
where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:
     0
    / \
   1   0
      / \
     1   0
    / \
   1   1 

*/

// NOTE: subtrees with 1 element count as unival, since a node has the same value as itself

function Node(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function isUnival(root) {
    return univalHelper(root, root.val);
}

function univalHelper(root, val) {
    if (!root) {
        return true;
    }
    if (root.val == val) {
        return univalHelper(root.left, val) && univalHelper(root.right, val);
    }
}
