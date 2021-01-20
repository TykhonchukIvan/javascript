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
        return {value: undefined, dane: true}
      }
    }
  }
}

function* iter(n = 10){
  for (let i = 0; i < n; i++){
    yield (function (){
      console.log('Iter', i)
    })()
  }
}

for (let key of iter(6)){}