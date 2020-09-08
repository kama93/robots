import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import {serachRobots, requestRobots} from './reduce'
import 'tachyons'


const logger= createLogger();
const rootReducers= combineReducers({serachRobots, requestRobots})
 const store= createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))



ReactDOM.render(
   <Provider store={store}>
    <App />
   </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
