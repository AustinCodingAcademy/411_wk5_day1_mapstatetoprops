import { createStore } from 'redux'
import reducers from './reducers'
import state from './state'

export default createStore(reducers, state)

// The combination of "state" and "reducers" that is injected into your application via the Provider.