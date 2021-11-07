import axios from '../utils/requestDomainAPI'

export const getBranchInfo = (id: string) => {
  return axios.get('/agencies/' + id)
}
