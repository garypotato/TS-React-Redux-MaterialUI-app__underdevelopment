import axios from '../utils/requestDomainAPI'

export const getProperties = (id: number) => {
  return axios.get(
    'https://api.domain.com.au/v1/agencies/' +
      id +
      '/listings?listingStatusFilter=live'
  )
}
