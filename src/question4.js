// ## Question

// Create a JWT for the following and place it in the answer section:

// **Header**
// ```js
// {
//     "alg": "HS256",
//     "typ": "JWT"
// }
// ```

// **Payload**
// ```js
// {
//     "id": 153,
//     "username": "sanchez",
//     "email": "rick@sanchez.com",
//     "role": "ADMIN"
// }
// ```

// **Secret**
// ```
// 87764d1a-92dc-4ced-a758-9c898c31d525
// ```

const jwt = require('jsonwebtoken')

const header = {alg: "HS256",
    typ: "JWT"}

    const playLoad = {
      id : 153,
      username: "sanchez",
      email: "rick@sanchez.com",
      role: "ADMIN"
    }
    const secretKey = '87764d1a-92dc-4ced-a758-9c898c31d525'

    const token = jwt.sign(playLoad,secretKey, { header })

    console.log(token)
