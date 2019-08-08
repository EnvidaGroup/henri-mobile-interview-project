import { FETCH_FEED_SUCCESS, NEW_POST, DELETE_POST } from '../types/FeedTypes'

const INITIAL_STATE = {
  posts: [],
  loading: true
}

const FeedReducer = (state = INITIAL_STATE, action) => {
  const newState = { ...state }

  switch (action.type) {
    case FETCH_FEED_SUCCESS: {
      const { posts } = action.payload

      return { posts, loading: false }
    }

    case NEW_POST: {
      newState.posts.unshift(action.payload)

      return newState
    }

    case DELETE_POST: {
      const index = newState.posts.findIndex(x => x.id === action.payload)

      if (index !== -1) {
        newState.posts.splice(index, 1)
      }

      return newState
    }

    default:
      return state
  }
}

export default FeedReducer
