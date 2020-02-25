import * as constants from './constants'

export const fetchAllTypesPending = () => ({
  type: constants.FETCH_ALL_TYPES_PENDING
})

export const fetchAllTypesSuccess = (users) => ({
  type: constants.FETCH_ALL_TYPES_SUCCESS,
  payload: users
})

export const fetchAllTypesFailed = (err) => ({
  type: constants.FETCH_ALL_TYPES_FAILED,
  payload: err
})

export const fetchOneTypePending = () => ({
  type: constants.FETCH_ONE_TYPE_PENDING
})

export const fetchOneTypeSuccess = (user) => ({
  type: constants.FETCH_ONE_TYPE_SUCCESS,
  payload: user
})

export const fetchOneTypeFailed = (err) => ({
  type: constants.FETCH_ONE_TYPE_FAILED,
  payload: err
})

export const addNewTypePending = () => ({
  type: constants.ADD_NEW_TYPE_PENDING
})

export const addNewTypeSuccess = (newUser) => ({
  type: constants.ADD_NEW_TYPE_SUCCESS,
  payload: newUser
})

export const addNewTypeFailed = (err) => ({
  type: constants.ADD_NEW_TYPE_FAILED,
  payload: err
})

export const editTypePending = () => ({
  type: constants.EDIT_TYPE_PENDING
})

export const editTypeSuccess = (updatedUser) => ({
  type: constants.EDIT_TYPE_SUCCESS,
  payload: updatedUser
})

export const editTypeFailed = (err) => ({
  type: constants.EDIT_TYPE_FAILED,
  payload: err
})

export const removeTypePending = () => ({
  type: constants.EDIT_TYPE_PENDING
})

export const removeTypeSuccess = (deletedUser) => ({
  type: constants.EDIT_TYPE_SUCCESS,
  payload: deletedUser
})

export const removeTypeFailed = (err) => ({
  type: constants.EDIT_TYPE_FAILED,
  payload: err
})