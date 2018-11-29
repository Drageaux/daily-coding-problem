/*
This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ...z = 26, and an encoded message, 
count the number of ways it can be decoded.

For example, the message '111' would give 3, 
since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable.
For example, '001' is not allowed. 
*/

// 0 doesn't translate to first letter

// try recursion and dp

function decode(s) {
    var n = s.length;
    if (n === 0 || s[0] === '0') return 0;
    var dp = new Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;

    for (var i = 2; i < n + 1; i++) {
        var currCode = s[i - 2] + '' + s[i - 1];

        var twoStepsBehind = currCode <= 26 && currCode >= 10 ? dp[i - 2] : 0;
        var oneStepBehind = s[i - 1] != 0 ? dp[i - 1] : 0;

        dp[i] = twoStepsBehind + oneStepBehind;
    }

    return dp[n];

    // decode 11 first
    // var count = 0;
    // for (var i = 1; i < n; i++) {
    //     var firstStr = s[i - 1];
    //     var secondStr = s[i - 1] + '' + s[i];
    //     // if () count++;
    //     // if (s[i - 1] + '' + s[i] <= 26) count++;
    // }
}

console.log(decode('112345'));
