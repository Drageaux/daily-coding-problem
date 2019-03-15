/*
Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.
*/

// python has enumerate()

var array = ['a', 'b', 'c'];

var iterator = array.entries();

// probability that the new Nth number is retrieved from the list is 1/(N-1)
// since it's always like that, then it's a "uniform probability"
var random_el; // store only constant space
for (let e of iterator) {
  // e[0] is the counter, e[1] is the value
  if (1 + Math.floor(Math.random() * (e[0] + 1)) === 1) {
    random_el = e[1];
  }
}

console.log(random_el);
