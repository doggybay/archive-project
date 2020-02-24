import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import users from './users/reducer'
import archiveItems from './archive-items/reducer'
import types from './types/reducer'

const rootReducer = combineReducers({ users, archiveItems, types })

const middleware = [thunk, logger]

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))