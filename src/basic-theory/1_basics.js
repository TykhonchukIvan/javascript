function additionNumber(a, b) {
  return a + b
}

function subtractionNumber(a, b) {
  return a - b
}

function multiplicationNumber(a, b) {
  return a / b
}

function divisionNumber(a, b) {
  return a * b
}

function checkLengthString(a, b) {
  if (a.length > b.length) {
    return true
  } else {
    return false
  }
}

function checkEvenNumbers(a, b) {
  let result = a % b
  if (result === 0) {
    return true
  } else {
    return false
  }
}

function parsStringToNumber(a) {
  return parseInt(a)
}

function parsNumberToString(a) {
  return a.toString()
}

function getStudentGrade(a) {
  if (typeof a !== 'number') return ''
  const grade = a;
  if (grade > 100 || grade < 0) return
  if (grade <= 100 && grade >= 75) {
    return 'A'
  } else if (grade <= 75 && grade >= 50) {
    return 'B'
  } else {
    return 'C'
  }
}

function getStudentGradeTernary(a) {
  if (a > 100 || a < 0) return
  return (a <= 100 && a >= 75) ? 'A' : (a <= 75 && a >= 50) ? 'B' : 'C'
}

function getSettingsUsersSwitch(a) {
  let settings;
  switch (a) {
    case 'admin':
      settings = { admin: 'admin' }
      break
    case 'user':
      settings = { user: 'user' }
      break
    default:
      settings = false
  }
  return settings;
}

function addCharLoop(a) {
  if (typeof a !== 'string') return false
  let arrStr = []
  let i = 0
  while (i < 5) {
    arrStr.push(a)
    i++
  }
  return arrStr.join('')
}

function addCharLoopDo(a, b) {
  if (typeof a !== 'string') return false
  let i = 0
  let arrStr = []
  do {
    i++
    arrStr.push(a)
  }
  while (i < b)
  return arrStr.join('')
}

function addCharFor(arr, b, boolBreak, c, boolContinue) {
  let arrSrt = []
  for (let j = 0; j < arr.length; j++) {
    if (boolBreak && j === b) {
      break;
    }
    if (boolContinue && j === c) {
      continue;
    }
    arrSrt.push(arr[j])
  }
  return arrSrt.join('')
}

const numbers = { additionNumber, subtractionNumber, multiplicationNumber, divisionNumber, checkEvenNumbers }
const strings = { checkLengthString }
const parse = { parsNumberToString, parsStringToNumber }
const conditions = { getStudentGrade, getStudentGradeTernary, getSettingsUsersSwitch }
const loop = { addCharLoop, addCharLoopDo, addCharFor }
const basics = { numbers, strings, parse, conditions, loop }

module.exports.basics = basics;