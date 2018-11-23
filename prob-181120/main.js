/*
This problem was recently asked by Google.

Given a list of numbers and a number k,
return whether any two numbers from the list add up to k.

For example, given[10, 15, 3, 7] and k of 17,
return true since 10 + 7 is 17.

Bonus: Can you do this in one pass ?
*/

var arr = [10, 15, 3, 7, 9, 2];
var k = 100;

console.log(addUpTo(arr, k));

function addUpTo(arr, k) {
  for (var i = 0; i < arr.length; i++) {
    // j = i + 1
    // skips comparing with indices less than i
    for (var j = i + 1; j < arr.length; j++) {
      console.log({ i: arr[i], j: arr[j] });
      if (arr[i] + arr[j] == k) {
        return true;
      }
    }
  }
  // TODO: Bonus (what's a pass? like passing in 1 argument or passing an arg once?)
  return false;
}
