import axios from 'axios'
import * as actions from './actions'
//import BASE_URL from '../location'

const BASE_URL = `http//localhost:8000/api`

export const fetchAllArchiveItems = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.fetchAllArchiveItemsPending())

      const res = await axios.get(`${BASE_URL}/archive-items`);

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

      const res = await axios.get(`${BASE_URL}/archive-items/${id}`);

      dispatch(actions.fetchOneArchiveItemSuccess(res.data))
    } catch (err) {
      dispatch(actions.fetchOneArchiveItemFailed(err))
    }
  }
}

export const editArchiveItem = (id, item) => {
  return async (dispatch) => {
    try {
      dispatch(actions.editArchiveItemPending())

      const res = await axios.patch(`${BASE_URL}/archive-items/${id}`, item);

      dispatch(actions.editArchiveItemSuccess(res.data))

    } catch (err) {
      dispatch(actions.editArchiveItemFailed(err))
    }
  }
}

export const addNewArchiveItem = (newArchiveItem, router) => {
  return async (dispatch) => {
    try {
      dispatch(actions.addNewArchiveItemPending())

      const res = await axios.post(`${BASE_URL}/archive-items`, newArchiveItem)

      dispatch(actions.addNewArchiveItemSuccess(res.data))

      router.push("/addtomyarchive/success")

    } catch (err) {
      dispatch(actions.addNewArchiveItemFailed(err))

      router.push("/addtomyarchive")

    }
  }
}

export const removeArchiveItem = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.removeArchiveItemPending())

      const res = await axios.delete(`${BASE_URL}/archive-items/${id}`);

      dispatch(actions.removeArchiveItemSuccess(res.data))

    } catch (err) {
      dispatch(actions.removeArchiveItemFailed(err))

    }
  }
}