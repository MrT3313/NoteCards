import auth0 from "auth0-js"
import { navigate } from "gatsby"

// - A - // HELPERS
// -1- // Auth0 Library expects the window to be present -- need auth0 only to load on the client
const isBrowser = typeof window !== "undefined"

// - 2 - // Tokens
const tokens = {
  accessToken: false,
  idToken: false,
  expiresAt: false,
}

// - 3 - // User
let user = {}


// - B - // AUTH OBJECT
// ONLY if isBrowser === true       --        otherwise return empty object
const auth = isBrowser
  ? new auth0.WebAuth({
      domain: process.env.GATSBY_AUTH0_DOMAIN,
      clientID: process.env.GATSBY_AUTH0_CLIENTID,
      redirectUri: process.env.GATSBY_AUTH0_CALLBACK,
      responseType: "token id_token",
      scope: "openid profile email",
    })
  : {}
console.log('!! AUTH OBJECT',auth)

// - C - // AUTH METHODS
// - 1 - // Login Method
export const login = () => {
  if (!isBrowser) {
    return
  }

  auth.authorize()
}

// - 2 - // 
// Successful Login
// Now have token & id_token
export const handleAuthentication = () => {
  if (!isBrowser) {
    return
  }

  auth.parseHash(setSession())
}

// -3- // SESSIONS
const setSession = (cb = () => {}) => (err, authResult) => {
  if (err) {
    navigate("/")
    cb()
    return
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken
    tokens.expiresAt = expiresAt
    user = authResult.idTokenPayload
    localStorage.setItem("isLoggedIn", true)
    navigate("/app")
    // navigate("/app/HomePage")
    cb()
  }
}

// - 4 - //
export const silentAuth = callback => {
  if (!isAuthenticated()) return callback()
  auth.checkSession({}, setSession(callback))
}

// - 5 - // 
export const isAuthenticated = () => {
  // -1- // if typeof window === undefined
  if (!isBrowser) {
    return
    
  }
  // ELSE:
    // V1 
    // return localStorage.getItem("isLoggedIn") === "true"
    
    // V2
    let checkResult_toDelete = true
    console.log('CHECK -- isAuthenticated', checkResult_toDelete)

    // TODO: getItem ?? or setItem
    return localStorage.getItem("isLoggedIn") === "true"
}
















export const getProfile = () => {
  return [user, tokens]
}

export const logout = () => {
  localStorage.setItem("isLoggedIn", false)
  auth.logout()
}
