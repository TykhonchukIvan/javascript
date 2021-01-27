function networkFetch(url) {
  return `${url} - response server`
}

const cache = new Set()

const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0]
    if(cache.has(url)) {
      return `${url} - response cache`
    } else {
      cache.add(url)
      return Reflect.apply(target, thisArg, args)
    }
  }
})

console.log(proxiedFetch('qwerty.com'))
console.log(proxiedFetch('123214.com'))
console.log(proxiedFetch('qwerty.com'))