import axios from "axios"
import { getToken, setToken } from "../../utils"

const user = {
  signup: async ({ name, email, password, age }) => {
    const result = await axios.post('https://api-nodejs-todolist.herokuapp.com/user/register', {
      name, email, password, age
    }, {
      headers: {
        'Content-type': 'application/json'
      }
    })
    setToken(result.data.access_key)
    return result
  },
  login: async ({ email, password }) => {
    return await axios.post('https://api-nodejs-todolist.herokuapp.com/user/login', {
      email, password
    }, {
      headers: {
        'Content-type': 'application/json'
      }
    })
  },
  logout: async () => {
    return await axios.post('https://api-nodejs-todolist.herokuapp.com/user/logout', {}, {
      headers: getToken()
    })
  }
}

export default user
