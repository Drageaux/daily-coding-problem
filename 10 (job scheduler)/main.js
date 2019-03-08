/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Apple.

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
*/
function f() {
  console.log('bruh');
}

// This code blocks for the specified duration. This is CPU hogging code.
// This is different from a thread blocking itself and releasing CPU cycles
// to be utilized by another thread.No such thing is going on here.
// Do not use this code, it's a very bad idea.
function scheduler(f, n) {
  var i = 0;
  var start = new Date().getTime();

  while (new Date().getTime() < start + n) {}
  return f();
  // setTimeout(f, n);
}

scheduler(f, 1000);
console.log('This should run first');
