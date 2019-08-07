import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import Router from './router'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <Router />
      </Provider>
    </View>
  )
}

export default App
