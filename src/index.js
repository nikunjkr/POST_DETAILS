import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider } from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {reducers} from "./reducers"

// STORE -->global state
// to set up redux create a store

//  Step 1 
const store = createStore(reducers, compose(applyMiddleware(thunk)))

// ACTION INCREMENT

// Reducer

// Dispach dispach this action to reducer store gets update
//donot forget to pass store props
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

