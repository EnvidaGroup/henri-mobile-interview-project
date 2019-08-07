import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import axios from 'axios'

const Todos = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTodos()
  }, [])

  const getTodos = async () => {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      )
      console.log(data)
      setTodos(data)
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
          data={todos}
          keyExtractor={user => user.id}
          renderItem={user => renderUser(user)}
        />
      )}
    </View>
  )
}

export default Todos
