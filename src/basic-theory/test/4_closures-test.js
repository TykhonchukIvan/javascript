const chai = require("chai");
const assert = chai.assert;

const closures = require('../4_closures').closures

let sum = closures.sum(10)

function closuresJsTheoryTest() {
  describe('Closures js theory', function () {
    it('Sun number closures', function () {
      const exp = 20;
      const agr = 10;
      const act = sum(agr);
      assert.equal(exp, act);
    })
    it('Sun number closures -> false', function () {
      const exp = false;
      const agr = [1,2,3,4];
      const act = sum(agr);
      assert.equal(exp, act);
    })
  })
}

module.exports.closuresJsTheoryTest = closuresJsTheoryTest