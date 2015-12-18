var f, index, should;

index = require('../index');

should = require('should');

f = index.fibonacci;

describe('test/index.test.js', function() {
  it('should equal 55 when n is 10', function() {
    return f(10).should.equal(55);
  });
  return it('n is not 0', function() {
    return f(0).should.equal(0);
  });
});
