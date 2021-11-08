import axios from '../utils/requestDomainAPI'

export const getProperty = (id: number) => {
  return axios.get('/listings/' + id)
}
