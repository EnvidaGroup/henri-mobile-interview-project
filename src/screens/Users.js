import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import axios from 'axios'

const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      console.log(data)
      setUsers(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const renderUser = user => {
    return (
      <View>
        <Text style={{ fontSize: 18 }}>{user.item.name}</Text>
        <Text>{user.item.email}</Text>
        <Text>{user.item.phone}</Text>
      </View>
    )
  }

  return (
    <View>
      {loading ? (
        <ActivityIndicator style={{ marginTop: 20 }} size="large" />
      ) : (
        <FlatList
          data={users}
          keyExtractor={user => user.id}
          renderItem={user => renderUser(user)}
        />
      )}
    </View>
  )
}

export default Users
