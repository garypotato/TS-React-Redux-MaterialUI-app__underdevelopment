import axios from '../utils/requestDomainAPI'

// * get how many branch a agency has
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

// * get one property info
export const getOneProperty = (id: number) => {
  return axios.get('/listings/' + id)
}

// * get all the properties
export const getProperties = (id: number) => {
  return axios.get(
    'https://api.domain.com.au/v1/agencies/' +
      id +
      '/listings?listingStatusFilter=live'
  )
}

// * get how many branch a agency has
export const getBranchInfo = (id: number) => {
  return axios.get('/agencies/' + id)
}
