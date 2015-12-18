app = require '../index'
supertest = require 'supertest'
should = require 'should'

request = supertest app
# agent = supertest.agent app
# agent
#   .post 'login'
#   .end(...)
# agent
#   .post 'create_topic'
#   .end(...)


describe 'test/index.test.js',->
  it 'should return 55 when n is 10',->
    request.get '/fib'
      .query n:10
      .end (err,res)->
        res.text.should.equal '55'
        done err

  testFib = (n,statusCode,expect,done)->
    request.get '/fib'
      .query n:n
      .expect statusCode
      .end (err,res)->
        res.text.should.equal expect
        done err

  it 'should return 0 when n is 0',(done)->
    testFib 0,200,'0',done

  it 'should return 1 when n is 1',(done)->
    testFib 1,200,'1',done

  it 'should return 55 when n is 10',(done)->
    testFib 10,200,'55',done

  it 'should throw when n>10',(done)->
    testFib 11,500,'n should <= 10',done

  it 'should throw when n<0',(done)->
    testFib -1,500,'n should > 0',done

  it 'should throw when n isnt Number',(done)->
    testFib 'good',500,'n should be a Number',done

  it 'should status 500 when error',(done)->
    request.get '/fib'
      .query n:100
      .expect 500
      .end (err,res)->
        done err
