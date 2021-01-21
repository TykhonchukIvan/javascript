console.log('request data')
//
// setTimeout(() => {
//   console.log('Preparing data...')
//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'wokring'
//   }
//   setTimeout(()=> {
//     backendData.modified = true
//     console.log('Data received', backendData)
//   }, 2000)
// }, 2000)


// const promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log('request data')
//     const backendData = {
//       server: 'aws',
//       port: 2000,
//       status: 'wokring'
//     }
//     resolve(backendData)
//   }, 2000)
// })
//
// promise.then(function (data) {
//   console.log('Promise resolve', data)
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true
//       resolve(data)
//       reject() // if error
//     }, 2000)
//   })
// }).then(clientData => {
//   console.log(clientData)
//   clientData.fromPromise = true
//   return clientData
// }).then(data => {
//   console.log('Modified', data)
// }).catch(err => console.error('Error: ', err))
//   .finally(()=> console.log('Finally'))

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve()
    }, ms)
  })
}

// sleep(2000).then(()=>console.log('2000'))
// sleep(4000).then(()=>console.log('4000'))

Promise.all([sleep(2000), sleep(3000), sleep(10000)])
  .then(() => {
  console.log('All promises')
  })

Promise.race([sleep(1000), sleep(3000), sleep(4000)])
  .then(() => {
  console.log('Race promises')
  })