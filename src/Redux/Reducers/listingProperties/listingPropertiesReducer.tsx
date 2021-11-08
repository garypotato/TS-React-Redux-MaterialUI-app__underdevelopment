import { IProperty } from '../../../type.d'
import { setListingProperties } from './listingPropertiesActions'
import actionTypes from './listingPropertiesActionTypes'

const initialState: IProperty[] = []

type Actions = ReturnType<typeof setListingProperties>

const rentReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case actionTypes.ACTION_LISTING:
      return [...action.payload]
    default:
      return state
  }
}

export default rentReducer
