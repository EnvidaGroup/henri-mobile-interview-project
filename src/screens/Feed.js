import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, FlatList, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getFeed } from '../redux/actions/FeedActions'

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

  const renderPost = post => {
    console.log(post)
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
            <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 3 }}>
              {post.item.user.name}
            </Text>
            <Text style={{ color: 'rgb(75, 75, 75)' }}>
              {post.item.user.email}
            </Text>
          </View>
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
          keyExtractor={post => post.id}
          renderItem={post => renderPost(post)}
        />
      )}
    </View>
  )
}

export default Feed
