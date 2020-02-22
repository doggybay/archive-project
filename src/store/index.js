import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import users from './users/reducer'
import archiveItems from './archive-items/reducer'

const rootReducer = combineReducers({ users, archiveItems })

const middleware = [thunk, logger]

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))