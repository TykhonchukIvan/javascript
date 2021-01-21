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

const person = { name: 'Ivan', age: 27, job: 'Frontend' }
const personTwo = { name: 'Irina', age: 27, job: null }

function printPerson(){
  console.log(`Person ${this.name} ${this.age} ${this.job}`)
}

function bindTest(context, fn) {
  return function (...args) {
    console.log(args)
    fn.apply(context, args)
  }
}

console.log(bindTest(person, printPerson)())
// console.log(bindTest(personTwo, printPerson)())

const closures = { sum }
module.exports.closures = closures;