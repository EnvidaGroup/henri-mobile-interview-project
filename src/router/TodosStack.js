import { createStackNavigator } from 'react-navigation'
import Todos from '../../src/screens/Todos'

const TodosStack = createStackNavigator({
  Todos: {
    screen: Todos,
    navigationOptions: {
      title: 'Todos'
    }
  }
})

export default TodosStack
