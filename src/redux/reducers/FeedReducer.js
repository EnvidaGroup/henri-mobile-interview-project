import { FETCH_FEED_SUCCESS } from '../types/FeedTypes'

const INITIAL_STATE = {
  posts: [],
  loading: true
}

const FeedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FEED_SUCCESS: {
      const { posts } = action.payload

      return { posts, loading: false }
    }
    default:
      return state
  }
}

export default FeedReducer
