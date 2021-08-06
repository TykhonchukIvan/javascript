function* strGenerator() {
  yield 'H'
  yield 'e'
  yield 'l'
  yield 'l'
  yield 'o'
}

const srt = strGenerator()

function* numberGen(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i
  }
}

// const number = numberGen()
// console.log(number.next())

// while (!number.next().done) {
//   console.log(number.next())
// }

const iterator = {
  [Symbol.iterator](n = 10) {
    let i = 0
    return {
      next() {
        if (i < n) return { value: ++i, dane: false }
        return { value: undefined, dane: true }
      }
    }
  }
}

function* iter(n = 10) {
  for (let i = 0; i < n; i++) {
    yield (function () {
      console.log('Iter', i)
    })()
  }
}

for (let key of iter(6)) {
}

function getPageSizeOptions(n) {

  const arr = []
  let pageSizeOptions = []

  function pushPag(arr, count) {
    for (let i = 0; i < 3; i++) {
      if (arr.length === 0) {
        arr.push(Math.round(count / 2));
      }
      if (i > 0) {
        arr.push(Math.round(arr[i - 1] / 2));
      }
    }
  }

  if (n >= 100) {
    pushPag(arr, 100)
    arr.unshift(100)
    pageSizeOptions = arr
      .map(el => {
        if (el === 13) return el = 10
        return el
      })
      .reverse()
  } else if (n < 100 && n >= 20) {
    pushPag(arr, n)
    arr.unshift(n)
    new Set(arr
      .map(el => {
        if (el <= 20) el = ''
        return el
      })
      .map(el => {
        if (el === '') el = 10
        return el
      })
      .reverse())
      .forEach(el => {
        pageSizeOptions.push(el)
      })
  } else if (n < 20 && n >= 10) {
    arr.push(10)
    arr.push(n)
    new Set(arr)
      .forEach(el => {
        pageSizeOptions.push(el)
      })
  } else {
    pageSizeOptions = [10]
  }
  return pageSizeOptions
}