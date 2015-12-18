should = chai.should()
describe 'simple test',->
  it 'should equal 0 when n is 0',->
    window.fibonacci 0
      .should
      .equal 0
