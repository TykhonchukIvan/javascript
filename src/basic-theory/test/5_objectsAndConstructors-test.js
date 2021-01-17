const chai = require("chai");
const assert = chai.assert;

const objectAndConstructors = require('../5_objectsAndConstructors').objectAndConstructors

function objectAndConstructorsJsTheoryTest() {
  describe('Object and constructors js theory', function () {
    it('Get lastname call', function () {
      const exp = 'Hello -> B -> !';
      const agr = new objectAndConstructors.User('A', 'B');
      const agrPrefix = 'Hello';
      const agrSuffix = '!';
      const act = objectAndConstructors.getLastName.call(agr,agrPrefix,agrSuffix);
      assert.equal(exp, act);
    })
    it('Get lastname apply', function () {
      const exp = 'Hello -> B -> !';
      const agr = new objectAndConstructors.User('A', 'B');
      const agrPrefix = 'Hello';
      const agrSuffix = '!';
      const act = objectAndConstructors.getLastName.apply(agr,[agrPrefix,agrSuffix]);
      assert.equal(exp, act);
    })
    it('Get lastname bind', function () {
      const exp = 'Hello -> B -> !';
      const agr = new objectAndConstructors.User('A', 'B');
      const agrPrefix = 'Hello';
      const agrSuffix = '!';
      const act = objectAndConstructors.getLastName.bind(agr)(agrPrefix,agrSuffix);
      assert.equal(exp, act);
    })
  })
}

module.exports.objectAndConstructorsJsTheoryTest = objectAndConstructorsJsTheoryTest