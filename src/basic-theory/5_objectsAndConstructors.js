'use strict'

function User(firstName, lastName) {
  // this = {}
  // this наследует prototype

  this.firstName = firstName || 'firstName'
  this.lastName = lastName || 'lastName'
  this.isAdmin = false

  function getName(firstName, lastName) {
    return `user -> ${firstName} ${lastName}`
  }

  this.getFullName = function () {
    console.log('this',this) // контекст конструктора
    return `${getName(this.firstName, this.lastName)}`
  }

  // return {} вернет {}
  // return приметив вернет this
  // return this
}

function getLastName(prefix, suffix) {
  return `${prefix || ''} -> ${this.lastName} -> ${suffix || ''}`
}

const myUsers = new User('a', 'a')
const anyUsers = new User('b', 'b')
const testUser = new anyUsers.constructor('c', 'c')

console.log(getLastName.call(myUsers, 'Hello', '!'))
console.log(getLastName.apply(anyUsers, ['Hello', '!']))
console.log(getLastName.bind(anyUsers)())

const objectAndConstructors  = { getLastName, User }
module.exports.objectAndConstructors = objectAndConstructors;