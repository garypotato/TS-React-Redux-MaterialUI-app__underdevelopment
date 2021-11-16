import axios from '../utils/requestServerAPI'

export const getCode = (sid: string) => {
  return axios.get('/public/getCode', {
    params: {
      sid: sid
    }
  })
}
