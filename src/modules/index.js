import { combineReducers } from 'redux'
import request from './request'
import base from './base'

export default combineReducers({
    base,
    request
})