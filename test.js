const chai = require("chai");
const assert = chai.assert;

const test = require('./src/index').testTest;

describe('Test', function () {
  it('RES', function () {
    const exp = 10;
    const act = test(5,5);
    assert.equal(exp, act);
  })
})
