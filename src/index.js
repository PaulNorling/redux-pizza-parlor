import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const pizzaReducer = (state = [], action) => {
  if (action.type === 'SET_PIZZA') {
    console.log('pizzaReducer', action.payload);
    return action.payload;
  }
  return state;
};

const orderReducer = (state = [], action) => {
  if (action.type === 'SET_ORDER') {
    console.log('orderReducer', action.payload);
    return action.payload;
  }
  return state;
};

const pizzaOrderReducer = (state = [], action) => {
  if (action.type === 'SET_PIZZAS') {
    console.log('pizzaOrderRuducer ', action.payload);
    return [...state, action.payload];
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    pizzaReducer,
    orderReducer,
    pizzaOrderReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,

  document.getElementById('root')
);
