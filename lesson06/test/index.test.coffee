index = require '../index'
should = require 'should'

f = index.fibonacci
describe 'test/index.test.js',->
  it 'should equal 55 when n is 10',->
    f 10
      .should
      .equal 55
  it 'n is not 0',->
    f 0
      .should
      .equal 0
