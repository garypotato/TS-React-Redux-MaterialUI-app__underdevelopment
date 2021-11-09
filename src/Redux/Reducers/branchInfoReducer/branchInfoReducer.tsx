import { IMoreDetailBranch } from '../../../type.d'
import { setDetailBranch } from './branchInfoActions'
import actionTypes from './branchInfoActionTypes'

const initialState = {} as IMoreDetailBranch

type Actions = ReturnType<typeof setDetailBranch>

const teamReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case actionTypes.ACTION_SET_DETAILBRANCH:
      return { ...action.payload }

    default:
      return state
  }
}
export default teamReducer
