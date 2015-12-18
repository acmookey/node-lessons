var Benchmark, int1, int2, int3, number, suite;

Benchmark = require('benchmark');

suite = new Benchmark.Suite;

int1 = function(str) {
  return +str;
};

int2 = function(str) {
  return parseInt(str, 10);
};

int3 = function(str) {
  return Number(str);
};

number = '100';

suite.add('+', function() {
  return int1(number);
}).add('parseInt', function() {
  return int2(number);
}).add('Number', function() {
  return int3(number);
}).on('cycle', function(event) {
  return console.log(String(event.target));
}).on('complete', function() {
  return console.log('Fastest is ' + this.filter('fastest').pluck('name'));
}).run({
  'async': true
});
