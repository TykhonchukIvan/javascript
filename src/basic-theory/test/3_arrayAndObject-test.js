const chai = require("chai");
const assert = chai.assert;

const arrayAndObject = require('../3_arrayAndObject').arrayAndObject

function arrayAndObjectJsTheory(){
  describe('Array and Object js theory', function () {
    it('Checking for string object -> false', function () {
      const exp = false;
      const agr = new String('Ivan');
      const act = arrayAndObject.isObject(agr);
      assert.equal(exp, act);
    })
    it('Checking for array object -> false', function () {
      const exp = false;
      const agr = [1,2,3,4];
      const act = arrayAndObject.isObject(agr);
      assert.equal(exp, act);
    })
    it('Checking for null object -> false', function () {
      const exp = false;
      const agr = null;
      const act = arrayAndObject.isObject(agr);
      assert.equal(exp, act);
    })
    it('Checking for bool object -> false', function () {
      const exp = false;
      const agr = true;
      const act = arrayAndObject.isObject(agr);
      assert.equal(exp, act);
    })
    it('Checking for number object -> false', function () {
      const exp = false;
      const agr = 12;
      const act = arrayAndObject.isObject(agr);
      assert.equal(exp, act);
    })
    it('Checking for object object -> true', function () {
      const exp = true;
      const agr = {  };
      const act = arrayAndObject.isObject(agr);
      assert.equal(exp, act);
    })
  })
}

module.exports.arrayAndObjectJsTheory = arrayAndObjectJsTheory