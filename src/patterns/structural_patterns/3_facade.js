class Complaints {
  constructor() {
    this.complaints = []
  }

  reply(complaints) {
  }

  add(complaints) {
    this.complaints.push(complaints)
    return this.reply(complaints)
  }
}

class ProductComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Product ${id}: ${customer}: (${details})`
  }
}

class ServiceComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Service ${id}: ${customer}: (${details})`
  }
}

class ComplaintsRegistry {
  register(customer, type, details) {
    const id = Date.now()
    let complaint
    if (type === 'service') {
      complaint = new ServiceComplaints()
    } else {
      complaint = new ProductComplaints()
    }
    return complaint.add({ id, customer, details })
  }
}


const registry = new ComplaintsRegistry()

console.log(registry.register('Ivan', 'service', 'недоступен'));
console.log(registry.register('Irina', 'product', 'недоступен'));