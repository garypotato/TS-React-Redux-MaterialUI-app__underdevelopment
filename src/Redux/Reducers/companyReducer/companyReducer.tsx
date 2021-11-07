import { ICompany } from '../../../type.d'
import { setCompanyBranches } from './companyActions'
import actionTypes from './companyActionTypes'

const initialState = {
  companyName: 'Seven Real Estate',
  // companyName: 'Manor',
  branches: [],
  selectedBranch: 26958
}

type Actions = ReturnType<typeof setCompanyBranches>

const companyReducer = (
  state: ICompany = initialState,
  action: Actions
): ICompany => {
  switch (action.type) {
    case actionTypes.ACTION_SET_COMPANY_BRANCHES:
      return { ...state, branches: action.payload }
    case actionTypes.ACTION_SET_COMPANY_SELECTEDBRANCH:
      return { ...state, selectedBranch: action.payload }
    default:
      return state
  }
}

export default companyReducer
