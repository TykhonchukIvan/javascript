class Server {
  constructor(ip, port) {
    this.ip = ip
    this.port = port
  }

  get url(){
    return `http://${this.ip}:${this.port}`
  }
}

function aws(server){
  server.isAWS = true
  server.awsInfo = function (){
    return server.url
  }
  return server
}

function azure(server){
  server.isAzure = true
  server.port += 500
  return server
}

const s1 = aws(new Server('12.33.55.77', 8080))
const s2 = azure(new Server('12.43.25.77', 1000))