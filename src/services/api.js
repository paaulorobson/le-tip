import axios from 'axios'

const api = axios.create({
  baseURL:'https://v6.exchangerate-api.com/',
})

export default api;