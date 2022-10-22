import axios from 'redaxios'

export const api = axios.create({
  baseURL: 'https://localhost:3000/api',
})
