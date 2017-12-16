new Promise((resolve, reject) => {
  throw new Error('my error thrown')
}).then(console.log)

process.on('unhandledRejection', (err) => {
  console.log(err)
})
