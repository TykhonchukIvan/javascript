class NyIterator {
  constructor(data) {
    this.index = 0
    this.data = data
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            dane: false
          }
        } else {
          this.index = 0
          return {
            dane: true,
            value: void 0
          }
        }
      }
    }
  }
}

const iterator = new NyIterator(['This', 'is', 'iterator'])

for (const val of iterator ){
  console.log("Value", val)
}