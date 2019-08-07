import React from 'react'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import FeatherIcons from 'react-native-vector-icons/Feather'
import FeedStack from './FeedStack'
import TodosStack from './TodosStack'
import UsersStack from './UsersStack'

const Router = createAppContainer(
  createBottomTabNavigator(
    {
      Users: UsersStack,
      Feed: FeedStack,
      Todos: TodosStack
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state
          let iconName
          if (routeName === 'Users') {
            iconName = 'users'
          } else if (routeName === 'Feed') {
            iconName = 'list'
          } else if (routeName === 'Todos') {
            iconName = 'check-circle'
          }

          return (
            <FeatherIcons
              name={iconName}
              active
              style={{ color: tintColor, fontSize: 20 }}
            />
          )
        }
      })
    }
  )
)

export default Router
