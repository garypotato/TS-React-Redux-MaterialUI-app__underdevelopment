import axios from '../utils/requestDomainAPI'

export const getProperty = (id: string) => {
  return axios.get('/listings/' + id)
}
