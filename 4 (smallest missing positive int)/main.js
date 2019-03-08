/* 
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer 
in linear time and constant space.
In other words, find the lowest positive integer 
that does not exist in the array.
The array can contain duplicates and negative numbers as well.

For example, the input[3, 4, -1, 1] should give 2. 
The input[1, 2, 0] should give 3.

You can modify the input array in-place. 
*/

// O(N) time and 0(1) space
// O(N) time using sort?
// O(1) space is modifying input in-place

var arr = [5, 6, 7, 8, 10, 3, 4, -1, 2, 1];

function findMissingPositiveInt(arr) {
    var result;

    arr.sort();

    // 1 min, find max, then increment until you see missing
    var min = 1;
    var max = Math.max(...arr); // learned how spread syntax works today

    for (var i = min; i < max; i++) {
        if (arr.indexOf(i) === -1) {
            result = i;
            break;
        }
    }

    return result;
}

console.log(findMissingPositiveInt(arr));
