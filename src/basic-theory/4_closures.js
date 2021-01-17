let foo = 1000;

(function () {
  console.log('IIFE')
})()

function counter() {
  let currentCounter = 1
  return ++currentCounter
}

function makeCounter() {
  let currentCounter = 1
  return function () {
    return currentCounter++
  }
}

const counterNew = makeCounter()

function sum(x) {
  if (typeof x !== 'number') return false
  let currentSum = null
  return function (y) {
    if (typeof y !== 'number') return false
    return currentSum += x + y
  }
}

const closures = { sum }
module.exports.closures = closures;