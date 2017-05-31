import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux' // using curly braces  instead of var createStore = redux....
import {createStore} from 'redux'

import allReducers from './reducers'
import App from './components/app'

const store = createStore(allReducers)  // our main application storage
// This creating a store. Just one big javascript object that is storing all
// of the data for our application
// This will be changing but we will not do that directly.
// The data that gets saved in the store gets determined by the reducer


// Provider: makes data in store avaliable to all containers
// note the store={store} syntax. We are making the data in store avaliable to all our components
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root'));
