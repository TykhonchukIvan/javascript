const car = {
  wheels: 4,
  init() {
    console.log(`${this.wheels}, ${this.name}`)
  }
}

const carWithName = Object.create(car, {
  name: {
    value: 'bmw'
  }
})

console.log(carWithName.__proto__ === car);

carWithName.init()