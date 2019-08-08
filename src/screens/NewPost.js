import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { newPost } from '../redux/actions/FeedActions'

const NewPost = props => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [submitPressed, setSubmitPressed] = useState(false)

  const createPost = () => {
    if (title && body && !submitPressed) {
      setSubmitPressed(true)

      dispatch(newPost({ title, body, navigation: props.navigation }))

      console.log('heyy!')
    }
  }

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <TextInput
        style={{
          paddingHorizontal: 10,
          paddingVertical: 8,
          fontSize: 16,
          borderWidth: 1,
          borderColor: 'rgb(200, 200, 200)',
          borderRadius: 5
        }}
        value={title}
        placeholder="Title"
        onChangeText={value => setTitle(value)}
      />

      <TextInput
        style={{
          marginTop: 10,
          paddingHorizontal: 10,
          paddingVertical: 8,
          fontSize: 16,
          borderWidth: 1,
          borderColor: 'rgb(200, 200, 200)',
          borderRadius: 5,
          height: 150
        }}
        value={body}
        multiline
        placeholder="Body"
        onChangeText={value => setBody(value)}
      />

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <TouchableOpacity
          onPress={createPost}
          style={{
            backgroundColor: 'blue',
            paddingVertical: 8,
            paddingHorizontal: 15,
            borderRadius: 5
          }}
        >
          <Text style={{ color: 'white' }}>Create Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default NewPost
