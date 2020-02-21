import axios from 'axios'
import * as actions from './actions'
//import BASE_URL from '../location'

const BASE_URL = `http//localhost:8000/api`

export const fetchAllArchiveItems = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.fetchAllArchiveItemsPending())

      const res = await axios.get(`api/archive-items`)

      dispatch(actions.fetchAllArchiveItemsSuccess(res.data))
    } catch (err) {
      dispatch(actions.fetchAllArchiveItemsFailed(err))
    }
  }
}

export const fetchOneArchiveItem = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.fetchOneArchiveItemPending())

      const res = await axios.get(`api/archive-items/${id}`)

      dispatch(actions.fetchOneArchiveItemSuccess(res.data))
    } catch (err) {
      dispatch(actions.fetchOneArchiveItemFailed(err))
    }
  }
}

export const editArchiveItem = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.editArchiveItemPending())

      const res = await axios.patch(`api/archive-items/${id}`)

      dispatch(actions.editArchiveItemSuccess(res.data))

    } catch (err) {
      dispatch(actions.editArchiveItemFailed(err))
    }
  }
}

export const addNewArchiveItem = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.addNewArchiveItemPending())

      const res = await axios.post(`api/archive-items`)

      dispatch(actions.addNewArchiveItemSuccess(res.data))

    } catch (err) {
      dispatch(actions.addNewArchiveItemFailed(err))

    }
  }
}

export const removeArchiveItem = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.removeArchiveItemPending())

      const res = await axios.delete(`api/archive-items/${id}`)

      dispatch(actions.removeArchiveItemSuccess(res.data))

    } catch (err) {
      dispatch(actions.removeArchiveItemFailed(err))

    }
  }
}