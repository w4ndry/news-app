
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import reducers from './';

export function initializeStore () {
  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
