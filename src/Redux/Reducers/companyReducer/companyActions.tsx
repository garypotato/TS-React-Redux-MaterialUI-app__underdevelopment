import actionTypes from './companyActionTypes'

export const setCompanyBranches = (data: any) => {
  return {
    type: actionTypes.ACTION_SET_COMPANY_BRANCHES,
    payload: data
  }
}

export const setSelectedBranch = (data: number) => {
  return {
    type: actionTypes.ACTION_SET_COMPANY_SELECTEDBRANCH,
    payload: data
  }
}
