// ES7 Async and await : using async and await keywords help to
// async programming looks like sequential programming.
// async
const getUser = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: 'Max'
      })
    }, 2000)
  })
}
const checkAuth = (role) => {
    // In reality, you of course don't have a timer but will probably reach out to a server
  return new Promise((resolve, reject) => {
    if (role === 'admin') {
      setTimeout(() => {
        resolve({
          isAuth: true
        })
      }, 2000)
    } else {
      setTimeout(() => {
        reject({
          isAuth: false
        })
      }, 2000)
    }
  })
}

async function login (username) {
  console.log('.......login process........')
  try {
    const authStatus = await checkAuth(username)
    const user = await getUser(authStatus)
    console.log(user.name)
  } catch (e) {
    console.log(e)
  }
}
login('admin')
