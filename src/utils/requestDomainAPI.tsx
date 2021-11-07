import { baseURL } from '../config'
import HttpRequest from './axios'

const baseUrl =
  process.env.NODE_ENV === 'development' ? baseURL.dev : baseURL.pro

const axios = new HttpRequest(baseUrl)

export default axios
