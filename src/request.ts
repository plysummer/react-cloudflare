import axios, { type AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 30 * 1000
})

instance.interceptors.request.use((config) => {
    return config
})

instance.interceptors.response.use(res => {
    return res
})

export {
    instance as request 
}

export default instance
