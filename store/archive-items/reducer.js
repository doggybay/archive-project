import * as constants from './constants'

let initialState = {
  all: [],
  oneArchiveItem: {},
  err: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_ALL_ARCHIVE_ITEMS_PENDING:
    case constants.FETCH_ONE_ARCHIVE_ITEM_PENDING:
    case constants.EDIT_ARCHIVE_ITEM_PENDING:
    case constants.ADD_NEW_ARCHIVE_ITEM_PENDING:
    case constants.REMOVE_ARCHIVE_ITEM_PENDING:
      return state
    
    case constants.FETCH_ALL_ARCHIVE_ITEMS_FAILED:
    case constants.FETCH_ONE_ARCHIVE_ITEM_FAILED:
    case constants.EDIT_ARCHIVE_ITEM_FAILED:
    case constants.ADD_NEW_ARCHIVE_ITEM_FAILED:
    case constants.REMOVE_ARCHIVE_ITEM_FAILED:
      return { ...state, err: action.payload}
    
    case constants.FETCH_ALL_ARCHIVE_ITEMS_SUCCESS:
      return { ...state, all: action.payload }
    
    case constants.FETCH_ONE_ARCHIVE_ITEM_SUCCESS:
      return { ...state, oneUser: action.payload }
    
    case constants.ADD_NEW_ARCHIVE_ITEM_SUCCESS:
      return { ...state, all: [...state.all, action.payload] }
    
    case constants.EDIT_ARCHIVE_ITEM_SUCCESS:
      return {
        ...state,
        all: state.all.reduce((newArchiveItems, archiveItem) => {
          if (!newArchiveItems.includes(archiveItem.id)) {
            if (archiveItem.id === action.payload.id) {
              newArchiveItems.push(action.payload)
            } else {
              newArchiveItems.push(archiveItem)
            }
          }
          return newArchiveItems
        }, [])
      }
    
    case constants.REMOVE_ARCHIVE_ITEM_SUCCESS:
      return {
        ...state,
        all: state.all.filter(user => user.id !== action.payload.id)
      }
    
    default:
      return state
  }
}