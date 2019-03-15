/*
This problem was asked by Amazon.

There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time.
Given N, write a function that returns the number of unique ways
you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2
What if, instead of being able to climb 1 or 2 steps at a time, 
you could climb any number from a set of positive integers X? 
For example, if X = { 1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
*/
function uniqueWays(N) {
  if (N <= 1) {
    return 1;
  }
  return uniqueWays(N - 1) + uniqueWays(N - 2);
}

function uniqueWaysOp(n) {
  // start with 1 and 2 to skip the initial 0 and 1 outcomes
  var a = 1;
  var b = 2;

  // remember to stop BEFORE n-1, because fib does the -2 thing
  for (var i = 0; i < n - 1; i++) {
    var a_old = a; // 1 = 1
    a = b; // 1 = 2
    b = a_old + b; // 2 = 1 + 2
  }
  return a;
}

function uniqueWaysIrr(n, X) {
  if (n < 0) return 0;
  else if (n === 0) return 1;
  else {
  }
}

console.time('uniqueWays');
console.log(uniqueWays(20));
console.timeEnd('uniqueWays');

console.time('uniqueWaysOp');
console.log(uniqueWaysOp(20));
console.timeEnd('uniqueWaysOp');
