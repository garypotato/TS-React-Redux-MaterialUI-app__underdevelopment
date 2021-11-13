// 封装axios的请求，返回重新封装的数据格式
// 对错误的统一处理
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  Canceler
} from 'axios'
import errorHandle from './errorHandle'
const CancelToken = axios.CancelToken

class HttpRequest {
  baseUrl: string
  pending: { [key: string]: Canceler }

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.pending = {}
  }

  // 获取axios配置
  getInsideConfig() {
    const config: AxiosRequestConfig = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // 'X-API-Key': 'key_7fd788131671df7ecf20aa3d2fc6f26b'
        'X-API-Key': 'key_f5f68ff415a21f0cbfa41fe387c21bfb'
      },
      timeout: 10000
    }
    return config
  }

  removePending(key: string, isRequest = false) {
    if (this.pending[key] && isRequest) {
      this.pending[key]('Cancel repeat request')
    }
    delete this.pending[key]
  }
  // 设定拦截器
  interceptors(instance: AxiosInstance) {
    // 请求拦截器
    instance.interceptors.request.use(
      config => {
        let key = config.url + '&' + config.method
        this.removePending(key, true)
        config.cancelToken = new CancelToken(c => {
          this.pending[key] = c
        })
        return config
      },
      (err: AxiosError) => {
        // debugger
        errorHandle(err)
        // Do something with request error
        return Promise.reject(err)
      }
    )

    // 响应请求的拦截器
    instance.interceptors.response.use(
      res => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        let key = res.config.url + '&' + res.config.method
        this.removePending(key)
        if (res.status === 200) {
          return Promise.resolve(res.data)
        } else {
          return Promise.reject(res)
        }
      },
      err => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        // debugger
        errorHandle(err)
        return Promise.reject(err)
      }
    )
  }
  // 创建实例
  request(options: AxiosRequestConfig) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(newOptions)
  }
  get(url: string) {
    return this.request({
      method: 'get',
      url: url
    })
  }
  post(url: string, data?: any) {
    return this.request({
      method: 'post',
      url: url,
      data: data
    })
  }
}

export default HttpRequest
