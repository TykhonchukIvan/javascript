class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibilities() {}

  work() {
    return `${this.name} working ${this.responsibilities()}`
  }
}

class Dev extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }
  responsibilities() {
    return 'development'
  }

}

const dev = new Dev('ivan')
console.log(dev.work())