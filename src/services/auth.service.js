import axios from 'axios'

const API_URL = 'http://localhost:9982/api/'

class AuthService {
  async login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then((response) => {
        if (response.data.token.access_token) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
      })
  }
}

export default new AuthService()
