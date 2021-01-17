const chai = require("chai");
const assert = chai.assert;

const basics = require('../1_basics').basics

function basicsJsTheoryTest() {
  describe('Basics js theory', function () {
    it('Number addition ', function () {
      const exp = 10;
      const act = basics.numbers.additionNumber(5, 5);
      assert.equal(exp, act);
    })
    it('Number subtraction ', function () {
      const exp = 5;
      const act = basics.numbers.subtractionNumber(10, 5);
      assert.equal(exp, act);
    })
    it('Number multiplication ', function () {
      const exp = 2;
      const act = basics.numbers.multiplicationNumber(10, 5);
      assert.equal(exp, act);
    })
    it('Number multiplication Infinity', function () {
      const exp = 'Infinity';
      const act = basics.numbers.multiplicationNumber(10, 0);
      assert.equal(exp, act);
    })
    it('Number multiplication -Infinity', function () {
      const exp = '-Infinity';
      const act = basics.numbers.multiplicationNumber(-10, 0);
      assert.equal(exp, act);
    })
    it('Number division', function () {
      const exp = 50;
      const act = basics.numbers.divisionNumber(10, 5);
      assert.equal(exp, act);
    })
    it('Check even numbers', function () {
      const exp = true;
      const act = basics.numbers.checkEvenNumbers(10, 2);
      assert.equal(exp, act);
    })
    it('Check string length', function () {
      const exp = true;
      const str1 = '123';
      const str2 = '12';
      const act = basics.strings.checkLengthString(str1, str2);
      assert.equal(exp, act);
    })
    it('Parse number to string', function () {
      const exp = 'string';
      const num = 123;
      const act = basics.parse.parsNumberToString(num);
      assert.equal(exp, typeof (act));
    })
    it('Parse string to number', function () {
      const exp = 'number';
      const num = 123;
      const act = basics.parse.parsStringToNumber(num);
      assert.equal(exp, typeof (act));
    })
    it('Grade A', function () {
      const exp = 'A';
      const num = 90;
      const act = basics.conditions.getStudentGrade(num);
      assert.equal(exp, act);
    })
    it('Grade B', function () {
      const exp = 'B';
      const num = 70;
      const act = basics.conditions.getStudentGrade(num);
      assert.equal(exp, act);
    })
    it('Grade C', function () {
      const exp = 'C';
      const num = 40;
      const act = basics.conditions.getStudentGrade(num);
      assert.equal(exp, act);
    })
    it('Grade C Ternary', function () {
      const exp = 'C';
      const num = 40;
      const act = basics.conditions.getStudentGradeTernary(num);
      assert.equal(exp, act);
    })
    it('Grade False', function () {
      const exp = '';
      const num = null;
      const act = basics.conditions.getStudentGrade(num);
      assert.equal(exp, act);
    })
    it('Get settings users switch admin', function () {
      const exp = 'admin';
      const arg = 'admin';
      const act = basics.conditions.getSettingsUsersSwitch(arg).admin;
      assert.equal(exp, act);
    })
    it('Get settings users switch user', function () {
      const exp = 'user';
      const arg = 'user';
      const act = basics.conditions.getSettingsUsersSwitch(arg).user;
      assert.equal(exp, act);
    })
    it('Get settings users switch false', function () {
      const exp = false;
      const arg = '123';
      const act = basics.conditions.getSettingsUsersSwitch(arg);
      assert.equal(exp, act);
    })
    it('Add char loop string while', function () {
      const exp = '11111';
      const arg = '1';
      const act = basics.loop.addCharLoop(arg);
      assert.equal(exp, act);
    })
    it('Add char loop string do while', function () {
      const exp = '111';
      const arg = '1';
      const argNum = 3;
      const act = basics.loop.addCharLoopDo(arg, argNum);
      assert.equal(exp, act);
    })
    it('Add char loop string do while -arg', function () {
      const exp = '1';
      const arg = '1';
      const argNum = -3;
      const act = basics.loop.addCharLoopDo(arg, argNum);
      assert.equal(exp, act);
    })
    it('Add char loop string do for break', function () {
      const exp = 'QWER';
      const arg = 'QWERTY';
      const arg1 = 4;
      const arg2 = true;
      const arg3 = null;
      const arg4 = null;
      const act = basics.loop.addCharFor(arg, arg1, arg2, arg3, arg4);
      assert.equal(exp, act);
    })
    it('Add char loop string do for continue', function () {
      const exp = 'QWRTY';
      const arg = 'QWERTY';
      const arg1 = null;
      const arg2 = null;
      const arg3 = 2;
      const arg4 = true;
      const act = basics.loop.addCharFor(arg, arg1, arg2, arg3, arg4);
      assert.equal(exp, act);
    })
  })
}

module.exports.basicsJsTheoryTest = basicsJsTheoryTest