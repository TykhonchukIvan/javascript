// Функциональное
// Родительская ф-я конструктор
function User(firstName, lastName) {

  this.firstName = firstName || 'firstName'
  this.lastName = lastName || 'lastName'

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
  }
}

// Дочерняя ф-я конструктор
function Manager(firstName, lastName) {
  User.apply(this, arguments)
  this.sayHello = function () {
    return 'Hello'
  }
  this.changeName = function (name) {
    this.firstName = name
  }
}

const u = new User('John', 'Doe')
const q = new Manager('Jone', 'Doe')

// Прототипное

function Admin(firstName, lastName) {
  this.firstName = firstName || 'firstName'
  this.lastName = lastName || 'lastName'
}

Admin.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

function Client(firstName, lastName) {
  User.apply(this, arguments)
}

Client.prototype.sayHello = function () {
  return 'Hello'
}
Client.prototype.changeName = function (name) {
  this.firstName = name
}

const w = new Admin('John', 'Doe')
const e = new Admin('Jone', 'Doe')

// Функциональное наследование 

function CheckIsObject(obj) {
  this.obj = obj || {}

  function checkIsObject(obj) {
    if (obj === null) return false
    return Object.getPrototypeOf(obj) === Object.prototype;
  }

  this.isObject = function (a) {
    return checkIsObject.apply(this, [a || this.obj])
  }
}

function CopyObject(obj) {
  CheckIsObject.call(this, obj)
  this.newObj = {}

  function copyObjRec(obj, newObj) {
    for (let prop in obj) {
      let recObj = {}
      if (obj.hasOwnProperty(prop)) {
        if (this.isObject(obj[prop])) {
          copyObjRec.apply(this, [obj[prop], recObj])
        } else {
          recObj = obj[prop]
        }
        newObj[prop] = recObj
      }
    }
  }

  this.copyObject = function (obj, copyObj) {
    copyObjRec.apply(this, [obj || this.obj, copyObj || this.newObj])
    return copyObj || this.newObj
  }
}

const testObjectCopy = new CopyObject()

// Прототипное

function CopyArray(arr) {
  this.arr = arr || []
  this.checkIsArray = CopyArray.prototype.checkIsArray.bind(this)
}

CopyArray.prototype.checkIsArray = function (arr) {
  return Array.isArray(arr || this.arr)
}

CopyArray.prototype.copyArr = function (arr) {
  let currentArray = arr || this.arr
  if (!this.checkIsArray(currentArray)) return false;
  return currentArray.slice()
}


const testArr = new CopyArray([1, 2, 3, 4])

const array = [1, 2, 3, 4, 5]

Array.prototype.multBy = function (n) {
  return this.map(function (i) {
    return i * n
  })
}

console.log(array.multBy(20))
const OOP = {}

const person = Object.create(
  {
    calcAge(){
      console.log(new Date().getFullYear() - this.birthYear)
    }
  },
  {
  name: {
    value: 'Ivan',
    enumerable: true,
    writable: true,
    configurable: true,
  },
  birthYear: {
    value: 1994,
    enumerable: true,
    writable: true,
    configurable: true,
  },
  age: {
    get() {
      return new Date().getFullYear() - this.birthYear
    },
    set(value) {
      console.log('Set', value)
    }
  }
})

console.log(person.age)
console.log(person.calcAge())

module.exports.OOP = OOP