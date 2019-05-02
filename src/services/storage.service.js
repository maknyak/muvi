const TOKEN_KEY = 'auth_data'

const AuthService = {
  getToken () {
    return localStorage.getItem(TOKEN_KEY)
  },

  saveToken (token) {
    localStorage.setItem(TOKEN_KEY, token)
  },

  removeToken () {
    localStorage.removeItem(TOKEN_KEY)
  }
}

export { AuthService }
