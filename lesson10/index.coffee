Benchmark = require 'benchmark'
suite = new Benchmark.Suite

int1 = (str)->
  +str
int2 = (str)->
  parseInt str,10
int3 = (str)->
  Number str

number = '100'

suite
  .add '+',->
    int1 number
  .add 'parseInt',->
    int2 number
  .add 'Number',->
    int3 number
  .on 'cycle',(event)->
    console.log  String event.target
  .on 'complete',->
    console.log 'Fastest is ' + this.filter('fastest').pluck('name')
  .run 'async':true
