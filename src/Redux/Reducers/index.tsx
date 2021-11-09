import { combineReducers } from 'redux'
import company from './companyReducer/companyReducer'
import properties from './listingProperties/listingPropertiesReducer'
import branchInfo from './branchInfoReducer/branchInfoReducer'

const rootReducer = combineReducers({
  company,
  properties,
  branchInfo
})

export default rootReducer
