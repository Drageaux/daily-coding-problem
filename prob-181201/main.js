/*
Implement an autocomplete system. That is, given a query string s
and a set of all possible query strings, 
return all strings in the set that have s as a prefix.

For example, given the query string de and 
the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
*/

function setupSet(cb) {
  var fs = require('fs');
  var parse = require('csv-parse');

  var inputFile = './prob-181201/autocomplete.csv';

  var parser = parse({ delimiter: ',' }, function(err, data) {
    var set = new Set(data[0]);
    cb(set);
  });
  fs.createReadStream(inputFile).pipe(parser);
}

function getOptimizedSet(set) {
  var res = Array.from(set);
  res.sort();
  console.log(res);

  return res;
}

function autocomplete1(s, querySet) {
  var res = new Set(querySet);
  res.forEach(entry => {
    if (entry.match(`^(?!${s})`)) {
      res.delete(entry);
    }
  });
  return res;
}

function autocomplete2(s, querySet) {
  var res = new Set();
  var arr = Array.from(querySet);
  arr.forEach(entry => {
    if (entry.match(`^(${s})`)) {
      res.add(entry);
    }
  });
  return res;
}

//================================
setupSet(run);

function run(set) {
  var async = require('async');
  // console.log('set is:', set);
  var oSet = getOptimizedSet(set);
  // console.log(oSet);

  // first search usually takes longer
  async.series([
    function(cb) {
      console.time('method2op');
      console.log('method2op:', autocomplete2('de', oSet));
      console.timeEnd('method2op');
      cb();
      // function(cb) {
      //   console.time('method2nonop');
      //   console.log('method2nonop:', autocomplete2('de', set));
      //   console.timeEnd('method2nonop');
      //   cb();
      // },
      // function(cb) {
      //   console.time('method1');
      //   console.log('method1:', autocomplete1('de', set));
      //   console.timeEnd('method1');
      //   cb();
    }
  ]);
}
// var set = new Set([
//   'dink',
//   'dern',
//   'deer',
//   'doe',
//   'damn',
//   'dump',
//   'deer',
//   'deer',
//   'deal',
//   'dear',
//   'donk',
//   'den',
//   'dong',
//   'doom',
//   'dean'
// ]);
