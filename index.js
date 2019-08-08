/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
console.ignoredYellowBox = [
  'Remote debugger',
  'Setting a timer',
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
]
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'Remote debugger',
  'Required dispatch_sync',
  'Unrecognized WebSocket connection option(s) `agent`'
])
console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => App)
