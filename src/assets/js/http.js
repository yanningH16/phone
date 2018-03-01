import axios from 'axios'
// axios 配置
axios.defaults.timeout = 5000
axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})
export default axios
