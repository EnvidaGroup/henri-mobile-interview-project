import React, { useEffect } from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  Alert
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { getFeed, deletePost } from '../redux/actions/FeedActions'

const Feed = () => {
  const dispatch = useDispatch()
  const { posts, loading } = useSelector(reduxState => reduxState.feed)

  useEffect(() => {
    dispatch(getFeed())
  }, [])

  const renderComment = comment => {
    return (
      <View
        style={{
          borderLeftWidth: 3,
          borderColor: 'green',
          marginVertical: 8,
          paddingHorizontal: 7
        }}
      >
        <Text style={{ fontWeight: '600', marginBottom: 3 }}>
          {comment.item.email}
        </Text>
        <Text>{comment.item.body}</Text>
      </View>
    )
  }

  const confirmDeletePost = id => {
    Alert.alert(
      'Delete post?',
      'This cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          onPress: () => dispatch(deletePost(id)),
          style: 'destructive'
        }
      ],
      { cancelable: false }
    )
  }

  const renderPost = post => {
    return (
      <View
        style={{
          padding: 10,
          borderBottomWidth: 8,
          borderColor: 'rgb(242, 242, 242)'
        }}
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
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Image
              source={{ uri: post.item.user.avatar }}
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                marginRight: 15
              }}
            />

            <View>
              <Text
                style={{ fontSize: 18, fontWeight: '600', marginBottom: 3 }}
              >
                {post.item.user.name}
              </Text>
              <Text style={{ color: 'rgb(75, 75, 75)' }}>
                {post.item.user.email}
              </Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => confirmDeletePost(post.item.id)}>
            <FeatherIcons name="trash" color="red" size={18} />
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 10 }}>
          {post.item.title}
        </Text>
        <Text style={{ fontSize: 16 }}>{post.item.body}</Text>

        <FlatList
          data={post.item.comments}
          style={{ marginTop: 5 }}
          keyExtractor={comment => comment.id}
          renderItem={comment => renderComment(comment)}
        />
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
          extraData={posts.length}
          keyExtractor={post => post.id}
          renderItem={post => renderPost(post)}
        />
      )}
    </View>
  )
}

export default Feed
