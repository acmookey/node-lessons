var should;

should = chai.should();

describe('simple test', function() {
  return it('should equal 0 when n is 0', function() {
    return window.fibonacci(0).should.equal(0);
  });
});
