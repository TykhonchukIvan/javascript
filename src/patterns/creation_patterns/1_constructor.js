// ES 5
function Server(name, ip) {
  this.name = name
  this.ip = ip
}

Server.prototype.getUrl = function () {
  return `http://${this.ip}:80`
}

const aws = new Server('AWS', '0.0.0.0')
console.log(aws.getUrl())

// ES 6
class ServerNew {
  constructor(name, ip) {
    this.name = name
    this.ip = ip
  }

  getUrl() {
    return `http://${this.ip}:80`
  }
}

const awsNew = new ServerNew('AWS', '0.0.0.0')
console.log(awsNew.getUrl())