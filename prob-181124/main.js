/* 
This problem was asked by Jane Street.

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns 
the first and last element of that pair.
For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair

Implement car and cdr. 
*/

function cons(a, b) {
    // accepts a function
    function pair(f) {
        return f(a, b); // the function will do something with and b
    }
    return pair; // returns the function pair
}

// car takes whatever is passed in,
// then pass in first as a callback
// car function in this case was pair, because that's what cons returned
// and then pair accepts first as a callback
// pair(first(a,b)) returns first(a,b) which returns a
function car(f) {
    function first(a, b) {
        return a;
    }
    return f(first);
}

function cdr(f) {
    function last(a, b) {
        return b;
    }
    return f(last);
}

function sum(f) {
    function add(a, b) {
        return a + b;
    }
    return f(add);
}

var a = 3,
    b = 4;
console.log(car(cons(a, b)));
console.log(cdr(cons(a, b)));
console.log(sum(cons(a, b)));
