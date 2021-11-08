import { IProperty } from '../../../type.d'
import actionTypes from './listingPropertiesActionTypes'

export const setListingProperties = (data: Array<IProperty>) => {
  return {
    type: actionTypes.ACTION_LISTING,
    payload: data
  }
}
