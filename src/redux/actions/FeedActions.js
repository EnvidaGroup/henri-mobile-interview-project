import axios from 'axios'
import { FETCH_FEED_SUCCESS, NEW_POST, DELETE_POST } from '../types/FeedTypes'
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

export const newPost = payload => {
  return async dispatch => {
    const { title, body, navigation } = payload

    try {
      const { data } = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        { title, body }
      )
      const user = store.getState().users.users[0]
      data.id = new Date()

      dispatch({
        type: NEW_POST,
        payload: { ...data, comments: [], user }
      })

      navigation.pop()
    } catch (error) {
      console.log(error)
    }
  }
}

export const deletePost = id => {
  return async dispatch => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)

      dispatch({
        type: DELETE_POST,
        payload: id
      })
    } catch (error) {
      console.log(error)
    }
  }
}
