import * as constants from './constants'

let initialState = {
  all: [],
  oneType: {},
  err: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_ALL_TYPES_PENDING:
    case constants.FETCH_ONE_TYPE_PENDING:
    case constants.EDIT_TYPE_PENDING:
    case constants.ADD_NEW_TYPE_PENDING:
    case constants.REMOVE_TYPE_PENDING:
      return state
    
    case constants.FETCH_ALL_TYPES_FAILED:
    case constants.FETCH_ONE_TYPE_FAILED:
    case constants.EDIT_TYPE_FAILED:
    case constants.ADD_NEW_TYPE_FAILED:
    case constants.REMOVE_TYPE_FAILED:
      return { ...state, err: action.payload}
    
    case constants.FETCH_ALL_TYPES_SUCCESS:
      return { ...state, all: action.payload }
    
    case constants.FETCH_ONE_TYPE_SUCCESS:
      return { ...state, oneType: action.payload }
    
    case constants.ADD_NEW_TYPE_SUCCESS:
      return { ...state, all: [...state.all, action.payload] }
    
    case constants.EDIT_TYPE_SUCCESS:
      return {
        ...state,
        all: state.all.reduce((newTypes, type) => {
          if (!newTypes.includes(type.id)) {
            if (type.id === action.payload.id) {
              newTypes.push(action.payload)
            } else {
              newTypes.push(type)
            }
          }
          return newTypes
        }, [])
      }
    
    case constants.REMOVE_TYPE_SUCCESS:
      return {
        ...state,
        all: state.all.filter(type => type.id !== action.payload.id)
      }
    
    default:
      return state
  }
}