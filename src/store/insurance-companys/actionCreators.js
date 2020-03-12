import axios from 'axios'
import * as actions from './actions'
//import BASE_URL from '../location'

const BASE_URL = `http//localhost:8000/api`

export const fetchAllInsuranceCompanys = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.fetchAllInsuranceCompanysPending())

      const res = await axios.get(`api/insurance-companys`)

      dispatch(actions.fetchAllInsuranceCompanysSuccess(res.data))
    } catch (err) {
      dispatch(actions.fetchAllInsuranceCompanysFailed(err))
    }
  }
}

export const fetchOneInsuranceCompany = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.fetchOneInsuranceCompanyPending())

      const res = await axios.get(`api/insurance-companys/${id}`)

      dispatch(actions.fetchOneInsuranceCompanySuccess(res.data))
    } catch (err) {
      dispatch(actions.fetchOneInsuranceCompanyFailed(err))
    }
  }
}

export const editInsuranceCompany = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.editInsuranceCompanyPending())

      const res = await axios.patch(`api/insurance-companys/${id}`)

      dispatch(actions.editInsuranceCompanySuccess(res.data))

    } catch (err) {
      dispatch(actions.editInsuranceCompanyFailed(err))
    }
  }
}

export const addNewInsuranceCompany = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.addNewInsuranceCompanyPending())

      const res = await axios.post(`api/insurance-companys`)

      dispatch(actions.addNewInsuranceCompanySuccess(res.data))

    } catch (err) {
      dispatch(actions.addNewInsuranceCompanyFailed(err))

    }
  }
}

export const removeInsuranceCompany = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.removeInsuranceCompanyPending())

      const res = await axios.delete(`api/insurance-companys/${id}`)

      dispatch(actions.removeInsuranceCompanySuccess(res.data))

    } catch (err) {
      dispatch(actions.removeInsuranceCompanyFailed(err))

    }
  }
}