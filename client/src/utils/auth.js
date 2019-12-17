import auth0 from "auth0-js"
import { navigate } from "gatsby"

const isBrowser = typeof window !== "undefined"

const auth = isBrowser
  ? new auth0.WebAuth({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENTID,
      redirectUri: process.env.AUTH0_CALLBACK,
      responseType: "token id_token",
      scope: "openid profile email",
    })
  : {}

console.log('!! AUTH OBJECT',auth)

const tokens = {
  accessToken: false,
  idToken: false,
  expiresAt: false,
}

let user = {}

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

export const login = () => {
  // -1- // if typeof window === undefined
  if (!isBrowser) {
    return
  }

  // -2- // ELSE:
  auth.authorize()
}

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

export const silentAuth = callback => {
  if (!isAuthenticated()) return callback()
  auth.checkSession({}, setSession(callback))
}

export const handleAuthentication = () => {
  if (!isBrowser) {
    return
  }

  auth.parseHash(setSession())
}

export const getProfile = () => {
  // return user
  return [user, tokens]
}

export const logout = () => {
  localStorage.setItem("isLoggedIn", false)
  auth.logout()
}
