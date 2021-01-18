const car = {
  nark: 'BMW',
  modal: 'X5',
  year: 2010,
  'getName': function () {
    return `${this.nark} ${this.modal}`
  }
}

const carTwo = {
  nark: 'Mercedes',
  modal: 'SLK',
  year: 2020,
  'getName': function () {
    return `${this.nark} ${this.modal}`
  },
  price: 120000
}

const objCar = {
  company: 'Volkswagen Group',
  group: {
    Audi: {
      model: ['RS', 'A4', 'TT', 'R8'],
    },
    Seat: {
      model: ['leon', 'ibiza'],
    },
    Bentley: {
      model: ['continental'],
    },
    Bugatti: {
      model: ['veyron', 'chiron'],
    },
    Lamborghini: {
      model: ['aventador', 'huracan'],
    },
    Porsche: {
      model: ['911', 'panamera'],
    },
    Volkswagen: {
      model: ['Golf', 'Polo'],
    },
  },
}

const arr = [2, 3, 45, 6, 7, 89, 0, 41, 32432, 523, 23, 1, 42, 421, 44, 0.9]

arr.length = 140

arr.sort(function compare(a, b) {
  return a - b;
})

function objCarObject(obj) {
  let currentObj = {}
  for (let prop in obj) {
    if (typeof obj[prop] === 'function') continue;
    if (obj.hasOwnProperty(prop)) {
      if (typeof obj[prop] !== 'object') currentObj[prop] = obj[prop];
      if (typeof obj[prop] === 'object') {
        let propObj = obj[prop]
        let currentPropObj = {}
        for (let prop in propObj) {
          if (typeof propObj[prop] === 'function') continue;
          if (typeof propObj[prop] !== 'object') currentPropObj[prop] = propObj[prop]
          if (typeof propObj[prop] === 'object') {
            let propObject = propObj[prop]
            let currentPropObject = {}
            for (let prop in propObject) {
              currentPropObject[prop] = propObject[prop]
            }
            currentPropObj[prop] = currentPropObject
          }
        }
        currentObj[prop] = currentPropObj
      }
    }
  }
  return currentObj;
}

function objectCopy(obj) {
  let newObject = {}
  obj = obj || {}
  for (let prop in obj) {
    if (typeof obj[prop] === 'function') continue;
    if (obj.hasOwnProperty(prop)) {
      newObject[prop] = obj[prop]
    }
  }
  return newObject
}

function changesObj(obj) {
  let copyObject = objectCopy(obj)
  copyObject.group = objectCopy(obj.group)
  for (let prop in copyObject.group) {
    copyObject.group[prop] = objectCopy(copyObject.group[prop]);
  }
  let arrCar = [];
  for (let prop in copyObject.group) {
    for (let j = 0; j < copyObject.group[prop].model.length; j++) {
      arrCar.push(copyObject.group[prop].model[j])
    }
  }

  arrCar.sort()

  const joinCarARR = arrCar.join('')
  console.log(joinCarARR)
  return joinCarARR
}

function isObject(obj) {
  if (obj === null) return false
  return Object.getPrototypeOf(obj) === Object.prototype;
}

function copyObjRec(obj, newObj) {
  for (let prop in obj) {
    let recObj = {}
    if (obj.hasOwnProperty(prop)) {
      if (isObject(obj[prop])) {
        copyObjRec(obj[prop], recObj)
      } else {
        recObj = obj[prop]
      }
      newObj[prop] = recObj
    }
  }
}

const arrayAndObject = { isObject };

module.exports.arrayAndObject = arrayAndObject;