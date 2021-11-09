import axios from '../utils/requestDomainAPI'

export const getBranchInfo = (id: number) => {
  return axios.get('/agencies/' + id)
}
