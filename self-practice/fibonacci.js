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
  // console.log(i + ':', fib(i));
}

function fibDynamic(N) {
  var cache = [];
  for (var _ = 0; _ <= N; _++) {
    cache[_] = 0;
  }
  cache[0] = 1; // 0-index start with 0
  // print(cache);

  if (N <= 1) return 1;
  else {
    // 1-index starts with 1 + 0-index
    for (var i = 1; i <= N; i++) {
      cache[i] += cache[i - 1] + (i - 2 >= 0 ? cache[i - 2] : 0);
    }
    return cache[N];
  }
}

function print(obj) {
  console.log(obj);
}
function printTime(obj, name) {
  console.time(name);
  print(obj);
  console.timeEnd(name);
}

printTime(fib(10), 'fib');
printTime(fibDynamic(1500), 'fibDynamic');
