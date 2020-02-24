import axios from 'axios'
import * as actions from './actions'
//import BASE_URL from '../location'

const BASE_URL = `http//localhost:8000/api`

export const fetchAllTypes = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.fetchAllTypesPending())

      const res = await axios.get(`api/types`)

      dispatch(actions.fetchAllTypesSuccess(res.data))
    } catch (err) {
      dispatch(actions.fetchAllTypesFailed(err))
    }
  }
}

export const fetchOneType = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.fetchOneTypePending())

      const res = await axios.get(`api/types/${id}`)

      dispatch(actions.fetchOneTypeSuccess(res.data))
    } catch (err) {
      dispatch(actions.fetchOneTypeFailed(err))
    }
  }
}

export const editType = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.editTypePending())

      const res = await axios.patch(`api/types/${id}`)

      dispatch(actions.editTypeSuccess(res.data))

    } catch (err) {
      dispatch(actions.editTypeFailed(err))
    }
  }
}

export const addNewType = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.addNewTypePending())

      const res = await axios.post(`api/types`)

      dispatch(actions.addNewTypeSuccess(res.data))

    } catch (err) {
      dispatch(actions.addNewTypeFailed(err))

    }
  }
}

export const removeType = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.removeTypePending())

      const res = await axios.delete(`api/types/${id}`)

      dispatch(actions.removeTypeSuccess(res.data))

    } catch (err) {
      dispatch(actions.removeTypeFailed(err))

    }
  }
}