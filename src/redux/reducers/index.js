import { combineReducers } from 'redux'
import UsersReducer from './UsersReducer'
import FeedReducer from './FeedReducer'

export default combineReducers({
  users: UsersReducer,
  feed: FeedReducer
})
