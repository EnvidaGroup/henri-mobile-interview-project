import { FETCH_USERS_SUCCESS } from '../types/UsersTypes'

const INITIAL_STATE = {
  users: []
}

const FeedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload }
    default:
      return state
  }
}

export default FeedReducer
