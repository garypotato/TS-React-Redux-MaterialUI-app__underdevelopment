import axios from '../utils/requestDomainAPI'

export const getOneProperty = (id: number) => {
  return axios.get('/listings/' + id)
}
