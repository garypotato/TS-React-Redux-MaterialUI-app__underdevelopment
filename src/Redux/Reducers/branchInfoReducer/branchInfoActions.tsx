import { IMoreDetailBranch } from '../../../type.d'
import actionTypes from './branchInfoActionTypes'

export const setDetailBranch = (data: IMoreDetailBranch) => {
  return {
    type: actionTypes.ACTION_SET_DETAILBRANCH,
    payload: data
  }
}
