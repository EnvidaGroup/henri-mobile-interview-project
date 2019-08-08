import axios from 'axios'
import { FETCH_FEED_SUCCESS } from '../types/FeedTypes'
import store from '../../store'

export const getFeed = () => {
  return async dispatch => {
    try {
      const [posts, comments] = await Promise.all([
        axios.get('https://jsonplaceholder.typicode.com/posts'),
        axios.get('https://jsonplaceholder.typicode.com/comments')
      ])

      const users = store.getState().users.users

      for (const post of posts.data) {
        post.user = users.find(x => x.id === post.userId)
        post.comments = comments.data.filter(x => x.postId === post.id)
      }

      dispatch({
        type: FETCH_FEED_SUCCESS,
        payload: { posts: posts.data, comments: comments.data }
      })
    } catch (error) {
      console.log(error)
    }
  }
}
