var app, request, should, supertest;

app = require('../index');

supertest = require('supertest');

should = require('should');

request = supertest(app);

describe('test/index.test.js', function() {
  var testFib;
  it('should return 55 when n is 10', function() {
    return request.get('/fib').query({
      n: 10
    }).end(function(err, res) {
      res.text.should.equal('55');
      return done(err);
    });
  });
  testFib = function(n, statusCode, expect, done) {
    return request.get('/fib').query({
      n: n
    }).expect(statusCode).end(function(err, res) {
      res.text.should.equal(expect);
      return done(err);
    });
  };
  it('should return 0 when n is 0', function(done) {
    return testFib(0, 200, '0', done);
  });
  it('should return 1 when n is 1', function(done) {
    return testFib(1, 200, '1', done);
  });
  it('should return 55 when n is 10', function(done) {
    return testFib(10, 200, '55', done);
  });
  it('should throw when n>10', function(done) {
    return testFib(11, 500, 'n should <= 10', done);
  });
  it('should throw when n<0', function(done) {
    return testFib(-1, 500, 'n should > 0', done);
  });
  it('should throw when n isnt Number', function(done) {
    return testFib('good', 500, 'n should be a Number', done);
  });
  return it('should status 500 when error', function(done) {
    return request.get('/fib').query({
      n: 100
    }).expect(500).end(function(err, res) {
      return done(err);
    });
  });
});
