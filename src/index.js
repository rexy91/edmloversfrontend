import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers, compose} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

//import reducers
import followReducer from './Redux/followReducer'
import userReducer from './Redux/userReducer'

const rootReducer = combineReducers({
    // userReducer:userReducer,
    // followReducer:followReducer
    // Es6 syntax
      userReducer,
      followReducer
})

// createStore takes two argument, the reducer and the middleware for debugging tools on browser.(states)
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

