import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity
} from 'react-native'
import FeatherIcons from 'react-native-vector-icons/Feather'

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

      setTodos(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const setCompleted = todo => {
    setTodos(prevState => {
      const index = prevState.findIndex(x => x.id === todo.id)

      if (index !== -1) {
        prevState[index].completed = !prevState[index].completed
      }

      return [...prevState]
    })
  }

  const renderUser = todo => {
    return (
      <View
        style={{ marginVertical: 5, padding: 15, backgroundColor: 'white' }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <View
            style={{
              flex: 1,
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginRight: 15
            }}
          >
            <Text
              style={{
                fontSize: 18,
                flex: 1,
                color: !todo.item.completed ? 'black' : 'gray',
                textDecorationLine: todo.item.completed
                  ? 'line-through'
                  : 'none',
                textDecorationStyle: 'solid'
              }}
            >
              {todo.item.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => setCompleted(todo.item)}
            style={{ width: 32 }}
          >
            <FeatherIcons
              size={28}
              name={todo.item.completed ? 'check-circle' : 'circle'}
              color={todo.item.completed ? 'green' : 'lightgray'}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(242, 242, 242)' }}>
      {loading ? (
        <ActivityIndicator style={{ marginTop: 20 }} size="large" />
      ) : (
        <FlatList
          data={todos}
          keyExtractor={user => user.id}
          renderItem={renderUser}
        />
      )}
    </View>
  )
}

export default Todos
