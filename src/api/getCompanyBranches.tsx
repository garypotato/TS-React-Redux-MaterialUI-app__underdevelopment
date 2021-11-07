import axios from '../utils/requestDomainAPI'

/**
 * * get branches Information
 * @param {String} params  the name of the Company
 * @returns
 */
export const getCompanyBranches = (params: string) => {
  let newParamsArray = params.split(' ')
  let newParams = ''

  for (let i = 0; i < newParamsArray.length; i++) {
    if (i < newParamsArray.length - 1) {
      newParamsArray[i] = newParamsArray[i] + '%20'
    }
    newParams = newParams + newParamsArray[i]
  }

  return axios.get('/agencies?q=' + newParams)
}
