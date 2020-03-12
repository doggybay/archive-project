import * as constants from './constants'

export const fetchAllInsuranceCompanysPending = () => ({
  type: constants.FETCH_ALL_INSURANCE_COMPANYS_PENDING
})

export const fetchAllInsuranceCompanysSuccess = (users) => ({
  type: constants.FETCH_ALL_INSURANCE_COMPANYS_SUCCESS,
  payload: users
})

export const fetchAllInsuranceCompanysFailed = (err) => ({
  type: constants.FETCH_ALL_INSURANCE_COMPANYS_FAILED,
  payload: err
})

export const fetchOneInsuranceCompanyPending = () => ({
  type: constants.FETCH_ONE_INSURANCE_COMPANY_PENDING
})

export const fetchOneInsuranceCompanySuccess = (user) => ({
  type: constants.FETCH_ONE_INSURANCE_COMPANY_SUCCESS,
  payload: user
})

export const fetchOneInsuranceCompanyFailed = (err) => ({
  type: constants.FETCH_ONE_INSURANCE_COMPANY_FAILED,
  payload: err
})

export const addNewInsuranceCompanyPending = () => ({
  type: constants.ADD_NEW_INSURANCE_COMPANY_PENDING
})

export const addNewInsuranceCompanySuccess = (newUser) => ({
  type: constants.ADD_NEW_INSURANCE_COMPANY_SUCCESS,
  payload: newUser
})

export const addNewInsuranceCompanyFailed = (err) => ({
  type: constants.ADD_NEW_INSURANCE_COMPANY_FAILED,
  payload: err
})

export const editInsuranceCompanyPending = () => ({
  type: constants.EDIT_INSURANCE_COMPANY_PENDING
})

export const editInsuranceCompanySuccess = (updatedUser) => ({
  type: constants.EDIT_INSURANCE_COMPANY_SUCCESS,
  payload: updatedUser
})

export const editInsuranceCompanyFailed = (err) => ({
  type: constants.EDIT_INSURANCE_COMPANY_FAILED,
  payload: err
})

export const removeInsuranceCompanyPending = () => ({
  type: constants.EDIT_INSURANCE_COMPANY_PENDING
})

export const removeInsuranceCompanySuccess = (deletedUser) => ({
  type: constants.EDIT_INSURANCE_COMPANY_SUCCESS,
  payload: deletedUser
})

export const removeInsuranceCompanyFailed = (err) => ({
  type: constants.EDIT_INSURANCE_COMPANY_FAILED,
  payload: err
})