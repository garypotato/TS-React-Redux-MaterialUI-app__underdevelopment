import { ServerURL } from '../config'
import HttpRequest from './axios'

const baseUrl = ServerURL

const axios = new HttpRequest(baseUrl)

export default axios
