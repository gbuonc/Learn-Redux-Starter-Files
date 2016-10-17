import {createStore, compose} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from 'react-router'
// root reducer
import rootReducer from './reducers/index'
import comments from './data/posts'
import posts from './data/comments'

// default data
const defaultState ={
   posts,
   comments
}

const store = createStore(rootReducer, defaultState,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const history = syncHistoryWithStore(browserHistory, store)

export default store
