let greeting = 'Hello'

funcDeclaration()

const funcExpression = function () {
  console.log('funcExpression', greeting);
}
funcExpression()

function funcDeclaration() {
  greeting = 'Bay';
  console.log('funcDeclaration', greeting);
}

function getFullName(firstName, lastName) {
  // if(typeof firstName === 'undefined' || typeof firstName !== 'string') firstName = 'User First Name'
  // if(typeof lastName === 'undefined'|| typeof lastName !== 'string') lastName = 'User Last Name'
  if (typeof firstName && typeof lastName !== 'string') return false;
  firstName = firstName || 'User First Name';
  lastName = lastName || 'User Last Name';
  return `${firstName} ${lastName}`;
}

function factorial(n) {
  if (n === 1) return n;
  else return n * factorial(n - 1);
}

function printNumbers(n) {
  let i = n
  while (i > 0) {
    console.log(i)
    i--
  }
}

function printNumbersR(n) {
  if (n > 0) {
    console.log(n)
    printNumbersR(n-1)
  }
}

const func = { getFullName };

module.exports.func = func;