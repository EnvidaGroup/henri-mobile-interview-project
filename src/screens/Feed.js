import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import axios from 'axios'

const Feed = () => {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPosts()
    getComments()
  }, [])

  const getPosts = async () => {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      console.log(data)
      setPosts(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const getComments = async () => {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/comments'
      )
      console.log(data)
      setComments(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const renderUser = user => {
    return (
      <View>
        <Text style={{ fontSize: 18 }}>{user.item.title}</Text>
        <Text>{user.item.completed}</Text>
      </View>
    )
  }

  return (
    <View>
      {loading ? (
        <ActivityIndicator style={{ marginTop: 20 }} size="large" />
      ) : (
        <FlatList
          data={posts}
          keyExtractor={user => user.id}
          renderItem={user => renderUser(user)}
        />
      )}
    </View>
  )
}

export default Feed
