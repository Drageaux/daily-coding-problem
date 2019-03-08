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

/**
 * Recursive function; checks current root's value; return back up if it reaches the end without problems
 *
 * Basically checking if there is a "different" value in the subtree
 *
 * @param {*} root
 * @param {*} val
 */
function univalHelper(root, val) {
  if (!root) {
    return true;
  }
  if (root.val === val) {
    return univalHelper(root.left, val) && univalHelper(root.right, val);
  }
}

function countUnivalSubtrees(root) {
  if (!root) return 0;

  var left = countUnivalSubtrees(root.left);
  var right = countUnivalSubtrees(root.right);
  if (isUnival(root)) {
    return 1 + left + right;
  } else {
    return left + right;
  }
}

var node = new Node(
  0,
  new Node(1),
  new Node(0, new Node(1, new Node(1), new Node(1)), new Node(0))
);

// console.log('final count: ' + countUnivalSubtrees(node));

// that was O(N^2). We're evaluating each of N node, then count each of N node again
function countOofNTime(root) {
  var result = { count: 0, isUnival: false };
  result.count = helper(root).count;
  return result.count;
}

function helper(root) {
  if (!root) return { count: 0, isUnival: true }; // null still makes it unival

  var left = helper(root.left);
  var right = helper(root.right);

  var totalCount = left.count + right.count;
  // don't forget to include self

  // this is why the first line returns true
  if (left.isUnival && right.isUnival) {
    // oops, not unival, doesn't add to count
    if (root.left && root.val !== root.left.val) {
      return { count: totalCount, isUnival: false };
    }
    // checks same thing on the right
    if (root.right && root.val !== root.right.val) {
      return { count: totalCount, isUnival: false };
    }
    return { count: totalCount + 1, isUnival: true };
  }

  // write this first
  // if either subtree is not unival, then don't count, and return false
  return { count: totalCount, isUnival: false };
}

console.log(countOofNTime(node));
