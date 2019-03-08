/*
This problem was asked by Google.

Given the root to a binary tree,
implement serialize(root),
which serializes the tree into a string,
and deserialize(s),
which deserializes the string back into the tree.

For example, given the following Node class

class Node:
  def __init__(self, val, left = None, right = None):
    self.val = val
    self.left = left
    self.right = right
    The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
*/

// Serialization into arrays to make it simple

// Initializing a class definition
function Node(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var node = new Node(
  'root',
  new Node('left', new Node('left.left')),
  new Node('right', new Node('right.left'), new Node('right.right'))
);

function serialize(node) {
  var results = [];
  var queue = [node];

  var currNode = node;
  var done = false;

  while (!done) {
    currNode = queue.shift();
    if (currNode === null) {
      results.push(null);
    } else {
      results.push(currNode.val);
      queue.push(currNode.left, currNode.right);
    }

    if (queue.length === 0) {
      done = true;
    }
  }
  return results;
}

function deserialize(serialized) {
  var arr = serialized.slice();
  var done = false;

  var result = new Node(arr.shift()); // root is the first node that doesn't require the loop
  var nodeQueue = [result];

  var currNode;
  while (!done) {
    currNode = nodeQueue.shift(); // what's on the top of node queue to be checked?
    if (arr.length === 0) done = true;
    currNode.left = new Node(arr.shift()); // left is at head of the serialized array
    nodeQueue.push(currNode.left); // add left node to queue to be checked in next iteration
    if (arr.length === 0) done = true;
    currNode.right = new Node(arr.shift()); // right is at next head of the serialized array
    nodeQueue.push(currNode.right); // add right node to queue to be checked after left node is checked
    if (arr.length === 0) done = true;
  }

  return result;
}

// console.log(serialize(node));
console.log(deserialize(serialize(node)));
