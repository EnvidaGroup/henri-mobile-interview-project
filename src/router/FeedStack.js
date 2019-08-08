import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import FeatherIcons from 'react-native-vector-icons/Feather'
import Feed from '../../src/screens/Feed'
import NewPost from '../../src/screens/NewPost'

const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: ({ navigation }) => ({
      title: 'Feed',
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('NewPost')}
          style={{ paddingRight: 10 }}
        >
          <FeatherIcons name="edit" size={26} color="green" />
        </TouchableOpacity>
      )
    })
  },

  NewPost: {
    screen: NewPost,
    navigationOptions: {
      title: 'New Post'
    }
  }
})

export default FeedStack
