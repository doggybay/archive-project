import * as constants from './constants'

export const fetchAllArchiveItemsPending = () => ({
  type: constants.FETCH_ALL_ARCHIVE_ITEMS_PENDING
})

export const fetchAllArchiveItemsSuccess = (users) => ({
  type: constants.FETCH_ALL_ARCHIVE_ITEMS_SUCCESS,
  payload: users
})

export const fetchAllArchiveItemsFailed = (err) => ({
  type: constants.FETCH_ALL_ARCHIVE_ITEMS_FAILED,
  payload: err
})

export const fetchOneArchiveItemPending = () => ({
  type: constants.FETCH_ONE_ARCHIVE_ITEM_PENDING
})

export const fetchOneArchiveItemSuccess = (user) => ({
  type: constants.FETCH_ONE_ARCHIVE_ITEM_SUCCESS,
  payload: user
})

export const fetchOneArchiveItemFailed = (err) => ({
  type: constants.FETCH_ONE_ARCHIVE_ITEM_FAILED,
  payload: err
})

export const addNewArchiveItemPending = () => ({
  type: constants.ADD_NEW_ARCHIVE_ITEM_PENDING
})

export const addNewArchiveItemSuccess = (newArchiveItem) => ({
  type: constants.ADD_NEW_ARCHIVE_ITEM_SUCCESS,
  payload: newArchiveItem
})

export const addNewArchiveItemFailed = (err) => ({
  type: constants.ADD_NEW_ARCHIVE_ITEM_FAILED,
  payload: err
})

export const editArchiveItemPending = () => ({
  type: constants.EDIT_ARCHIVE_ITEM_PENDING
})

export const editArchiveItemSuccess = (updatedUser) => ({
  type: constants.EDIT_ARCHIVE_ITEM_SUCCESS,
  payload: updatedUser
})

export const editArchiveItemFailed = (err) => ({
  type: constants.EDIT_ARCHIVE_ITEM_FAILED,
  payload: err
})

export const removeArchiveItemPending = () => ({
  type: constants.EDIT_ARCHIVE_ITEM_PENDING
})

export const removeArchiveItemSuccess = (deletedUser) => ({
  type: constants.EDIT_ARCHIVE_ITEM_SUCCESS,
  payload: deletedUser
})

export const removeArchiveItemFailed = (err) => ({
  type: constants.EDIT_ARCHIVE_ITEM_FAILED,
  payload: err
})