function run() {
  var limit = 100;

  var count = 0;
  while (count < limit) {
    count++;
    
  }
}

function print(obj) {
  console.log(obj);
}
function printTime(obj, name = 'process') {
  console.time(name);
  print(obj);
  console.timeEnd(name);
}



printTime(run(), 'run');
