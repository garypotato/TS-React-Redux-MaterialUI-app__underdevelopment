import { combineReducers } from 'redux'
import company from './companyReducer/companyReducer'
import properties from './listingProperties/listingPropertiesReducer'

const rootReducer = combineReducers({
  company,
  properties
})

export default rootReducer
