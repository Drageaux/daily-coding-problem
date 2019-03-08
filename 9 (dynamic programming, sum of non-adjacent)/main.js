/* Good morning! Here's your coding interview problem for today.

This problem was asked by Airbnb.

Given a list of integers, write a function that 
returns the largest sum of non-adjacent numbers.
Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, 
since we pick 2, 6, and 5.[5, 1, 1, 5] should return 10, 
since we pick 5 and 5.

Follow - up: Can you do this in O(N) time and constant space ? */

// dynamic programming again
// big help: http://blog.gainlo.co/index.php/2016/12/02/uber-interview-question-maximum-sum-non-adjacent-elements/
// new to dynamic programming so I need all the help I can get
var arr = [2, 4, 6, 2, 5];
var indexSet = new Set();

indexSet.add(2, 2);

function largestSumOfNonAdjacent(arr) {
  var result = 0;
  var prevOne = 0;
  var prevTwo = 0;

  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      result = arr[0];
    } else if (i === 1) {
      result = Math.max(arr[0], arr[1]);
    } else {
      result = Math.max(prevOne, prevTwo + arr[i]);
    }
    console.log(result);
    prevTwo = prevOne;
    prevOne = result;
  }
  return result;
}

function isIndexAdjacent(arr, set) {}

console.log('index set', indexSet);
console.log(
  'largest sum of non-adjacent numbers for list',
  arr,
  'is:',
  largestSumOfNonAdjacent(arr)
);
