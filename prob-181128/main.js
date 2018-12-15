/* Good morning! Here's your coding interview problem for today.

This problem was asked by Airbnb.

Given a list of integers, write a function that 
returns the largest sum of non-adjacent numbers.
Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, 
since we pick 2, 6, and 5.[5, 1, 1, 5] should return 10, 
since we pick 5 and 5.

Follow - up: Can you do this in O(N) time and constant space ? */

// constant space, probably need a set
// GREEDY may work!!
// if you find the largest number's index, then find the next one's index (excluding adjacent)
var arr = [2, 4, 6, 2, 5];
var indexSet = new Set();

indexSet.add(2, 2);

function largestSumOfNonAdjacent(arr) {
  return;
}

function isIndexAdjacent(arr, set) {}

console.log('index set', indexSet);
console.log('test function', largestSumOfNonAdjacent(arr));
