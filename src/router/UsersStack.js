import { createStackNavigator } from 'react-navigation'
import Users from '../../src/screens/Users'

const UsersStack = createStackNavigator({
  Users: {
    screen: Users,
    navigationOptions: {
      title: 'Users'
    }
  }
})

export default UsersStack
