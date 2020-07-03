import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

//import reducers
import userReducer from './Redux/userReducer'
import followReducer from './Redux/followReducers'

const rootReducer = combineReducers({

    // userReducer:userReducer,
    // followReducer:followReducer
    // Es6 syntax
      userReducer,
      followReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// createStore takes two argument, the reducer and the middleware for debugging tools on browser.(states)
const store = createStore(rootReducer, combineReducers)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

