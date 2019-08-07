import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './redux/reducers'

export default createStore(reducers, {}, applyMiddleware(ReduxThunk))
