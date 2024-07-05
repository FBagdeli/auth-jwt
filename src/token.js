const jwt = require('jsonwebtoken')
//

/**
 * Implement this function to accept a payload and a secret key and return a JWT without an expiry time
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
 */
function createToken() {
    //(payload, secretKey)
    const payload = { 
        id: 1,
        username: 'nathank',
        iat: 1643987414 
    }
    const secretKey = 'mysecretkey'

    const token = jwt.sign(payload, secretKey)

    return token
}

/**
 * Implement this function to accept a payload, secret key and an expiry time, and return a JWT with an expiry
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim
 */
function createTokenWithExpiry() {
    const payload = { 
        id: 1,
        username: 'nathank',
        iat: 1643987414 
    }
    const secretKey = 'mysecretkey'
    const token = jwt.sign(payload, secretKey, { expiresIn: 60 * 60 })
    return token
}

/**
 * Implement this function to accept a JWT and a secret key. Return the decoded token (the payload) if verification is successful, and false if it fails
 * 
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
function verifyToken(token, secretKey) {
    try {
        const decoded = jwt.verify(token, secretKey)
        return decoded
    } catch (error) {
        return false
    }
}

module.exports = {
    createToken,
    createTokenWithExpiry,
    verifyToken
}
