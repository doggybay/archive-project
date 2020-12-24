import axios from 'axios'
import * as actions from './actions'

const BASE_URL = `http//localhost:8000/api`

export const fetchAllUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.fetchAllUsersPending())

      const res = await axios.get(`api/users`)

      dispatch(actions.fetchAllUsersSuccess(res.data))
    } catch (err) {
      dispatch(actions.fetchAllUsersFailed(err))
    }
  }
}

export const fetchOneUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.fetchOneUserPending())

      const res = await axios.get(`api/users/${id}`)

      dispatch(actions.fetchOneUserSuccess(res.data))
    } catch (err) {
      dispatch(actions.fetchOneUserFailed(err))
    }
  }
}

export const userLogin = (creds, router) => {
  
  return async (dispatch) => {
    try {
      dispatch(actions.userLoginPending())

      const res = await axios.post(`api/users/login`, creds)

      dispatch(actions.userLoginSuccess(res.data))

      localStorage.setItem("loggedInUser", JSON.stringify(res.data));
      router.push('/mydashboard')
      
    } catch (err) {
      dispatch(actions.userLoginFailed(err))
      router.push('/register')
    }
  }
}

export const userLogout = (router) => {
  
  return async (dispatch) => {
    try {
      dispatch(actions.userLogoutPending())
      router.push('/loading')
      dispatch(actions.userLogoutSuccess())

      localStorage.clear();
      router.push('/')
      
    } catch (err) {
      dispatch(actions.userLoginFailed(err))
      
    }
  }
}

export const editUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.editUserPending())

      const res = await axios.patch(`api/users/${id}`)

      dispatch(actions.editUserSuccess(res.data))

    } catch (err) {
      dispatch(actions.editUserFailed(err))
    }
  }
}

export const addNewUser = (newUser, router) => {
  return async (dispatch) => {
    try {
      dispatch(actions.addNewUserPending())

      const res = await axios.post(`api/users`, newUser)

      dispatch(actions.addNewUserSuccess(res.data))
      localStorage.setItem("loggedInUser", JSON.stringify(res.data));
      router.push("/mydashboard");
      dispatch(actions.userLoginSuccess(res.data))

    } catch (err) {
      dispatch(actions.addNewUserFailed(err))
      router.push('/register')

    }
  }
}

export const removeUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.removeUserPending())

      const res = await axios.delete(`api/users/${id}`)

      dispatch(actions.removeUserSuccess(res.data))

    } catch (err) {
      dispatch(actions.removeUserFailed(err))

    }
  }
}

export const removeAIFromUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.removeAIThrUsrPending())

      const res = await axios.delete(`api/archive-items/${id}`)

      dispatch(actions.removeAIThrUsrSuccess(res.data))
    } catch (err) {
      dispatch(actions.removeAIThrUsrFailed())
    }
  }
}