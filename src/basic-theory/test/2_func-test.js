const chai = require("chai");
const assert = chai.assert;

const func = require('../2_func').func

function functionJsTheoryTest () {
  describe('Function js theory', function () {
    it('Get full name', function () {
      const exp = 'Ivan Tychonchuk';
      const firstName = 'Ivan';
      const lastName = 'Tychonchuk';
      const act = func.getFullName(firstName, lastName);
      assert.equal(exp, act);
    })
    it('Get full name false', function () {
      const exp = false;
      const firstName = 'Ivan';
      const lastName = 5;
      const act = func.getFullName(firstName, lastName);
      assert.equal(exp, act);
    })
  })
}

module.exports.functionJsTheoryTest = functionJsTheoryTest
