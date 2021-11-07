import axios from '../utils/requestServerAPI'

export const getCode = () => {
  return axios.get('/public/getCode')
}
