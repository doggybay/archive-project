import * as constants from './constants'

let initialState = {
  all: [],
  oneInsComp: {},
  err: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_ALL_INSURANCE_COMPANYS_PENDING:
    case constants.FETCH_ONE_INSURANCE_COMPANY_PENDING:
    case constants.EDIT_INSURANCE_COMPANY_PENDING:
    case constants.ADD_NEW_INSURANCE_COMPANY_PENDING:
    case constants.REMOVE_INSURANCE_COMPANY_PENDING:
      return state
    
    case constants.FETCH_ALL_INSURANCE_COMPANYS_FAILED:
    case constants.FETCH_ONE_INSURANCE_COMPANY_FAILED:
    case constants.EDIT_INSURANCE_COMPANY_FAILED:
    case constants.ADD_NEW_INSURANCE_COMPANY_FAILED:
    case constants.REMOVE_INSURANCE_COMPANY_FAILED:
      return { ...state, err: action.payload}
    
    case constants.FETCH_ALL_INSURANCE_COMPANYS_SUCCESS:
      return { ...state, all: action.payload }
    
    case constants.FETCH_ONE_INSURANCE_COMPANY_SUCCESS:
      return { ...state, oneInsComp: action.payload }
    
    case constants.ADD_NEW_INSURANCE_COMPANY_SUCCESS:
      return { ...state, all: [...state.all, action.payload] }
    
    case constants.EDIT_INSURANCE_COMPANY_SUCCESS:
      return {
        ...state,
        all: state.all.reduce((newInsComps, InsComp) => {
          if (!newInsComps.includes(InsComp.id)) {
            if (InsComp.id === action.payload.id) {
              newInsComps.push(action.payload)
            } else {
              newInsComps.push(InsComp)
            }
          }
          return newInsComps
        }, [])
      }
    
    case constants.REMOVE_INSURANCE_COMPANY_SUCCESS:
      return {
        ...state,
        all: state.all.filter(InsComp => InsComp.id !== action.payload.id)
      }
    
    default:
      return state
  }
}