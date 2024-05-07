/**
 *
 * 1. install jsonwebtoken
 * 2. jwt.sign(payload, secret, {expiresIn:})
 * 3. token client
 *
 */

/**
 *
 * HOW TO STORE TOKEN IN THE CLIENT SIDE
 *
 * 1. memory> ok type.
 * 2. localStorage --> (XSS)
 * 3. cookies --> http only
 *
 */

/**
 * 1. set cookies with http only. for development secure: false.
 * 2. cors
 * app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));

 * 3. client side axios setting
      in axios set withCreanditial: true
 */
