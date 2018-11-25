/*
This problem was asked by Uber.

Given an array of integers, return a new array
such that each element at index i of the new array
is the product of all the numbers in the original array
except the one at i.

For example, if our input was[1, 2, 3, 4, 5],
the expected output would be[120, 60, 40, 30, 24].
If our input was[3, 2, 1], the expected output would be[2, 3, 6].

Follow - up: what if you can't use division?
    My answer: just use multiply. It's just way less efficient
*/

var arr = [1, 2, 3, 4, 5];

console.log('parseWithDivision: ' + parseWithDivision(arr));
console.log('parseWithOutDivision: ' + parseWithoutDivision(arr));

function parseWithDivision(arr) {
    var results = [];
    var finalProduct = arr.reduce(multiply, 1); // find total product
    results = arr.map(function cb(currVal) {
        // exclude index out from total product
        return finalProduct / currVal;
    });

    return results;
}

function multiply(a, b) {
    return a * b;
}

function parseWithoutDivision(arr) {
    var results = [];

    results = arr.map(function cb(x) {
        // for each number
        return arr.reduce(function(total, currVal) {
            // multiply
            if (currVal !== x) {
                // except the number
                return total * currVal;
            } else {
                return total;
            }
        }, 1);
    });

    return results;
}
