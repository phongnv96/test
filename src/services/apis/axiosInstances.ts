import axios, { AxiosRequestHeaders } from 'axios'
import { setMainInterceptor } from './interceptors'

const headers: AxiosRequestHeaders = { 'Content-Type': 'application/json' } as AxiosRequestHeaders

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URI,
  headers,
})

setMainInterceptor(http)

export { http }
