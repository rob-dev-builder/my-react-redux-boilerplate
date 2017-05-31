// 'combineReducers' is a built in function. This will take all our reducers and combine them into one object.

import {combineReducers} from 'redux'
import UserReducer from './reducer-users'


const allReducers = combineReducers({ // this will be a our main reducer that will be put into our store
  users: UserReducer
})

export default allReducers
