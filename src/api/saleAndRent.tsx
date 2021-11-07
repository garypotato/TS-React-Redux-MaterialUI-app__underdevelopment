import { AxiosPromise } from 'axios'
import axios from '../utils/requestDomainAPI'

export const getSaleAndRent = (id: string): AxiosPromise<any[]> => {
  return axios.get(
    'https://api.domain.com.au/v1/agencies/' +
      id +
      '/listings?listingStatusFilter=live'
  )
}
