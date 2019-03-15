function fib(N) {
  if (N <= 1) {
    // return 1 cuz it's the lowest value
    return 1;
  } else {
    // fib of n is fib of n-1 plus fib of n-2
    return fib(N - 1) + fib(N - 2);
  }
}

for (var i = 0; i <= 10; i++) {
  console.log(i + ':', fib(i));
}
