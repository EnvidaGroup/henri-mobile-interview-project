import { createStackNavigator } from 'react-navigation'
import Feed from '../../src/screens/Feed'

const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed'
    }
  }
})

export default FeedStack
