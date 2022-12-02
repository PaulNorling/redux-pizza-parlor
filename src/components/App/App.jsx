import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import SelectYourPizza from '../SelectYourPizza/SelectYourPizza';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Checkout from '../Checkout/Checkout';
import Admin from '../Admin/Admin';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Inside useEffect, first render');
    fetchPizzas();
  }, []);

  const fetchPizzas = () => {
    axios
      .get('/api/pizza')
      .then((response) => {
        console.log('Get response:', response.data);
        dispatch({ type: 'SET_PIZZA', payload: response.data });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>
      <Router>
        {/* <nav>
          <ul>
            <li>
              <Link to="/SelectYourPizza">Select Your zza</Link> */}
        {/* <a href="/#/">Home</a> */}
        {/* </li>
            <li>
              <Link to="/CustomerInfo">Customer Info</Link>
            </li>
            <li>
              <Link to="/Checkout">Checkout</Link>
            </li>
            <li>
              <Link to="/Admin">Admin</Link>
            </li>
          </ul>
        </nav> */}

        {/* routes go here */}
        <Route exact path="/">
          <SelectYourPizza />
        </Route>
        <Route exact path="/SelectYourPizza">
          <SelectYourPizza />
        </Route>

        <Route exact path="/CustomerInfo">
          <CustomerInfo />
        </Route>

        {/* Detail Page or Detail View */}
        <Route exact path="/Checkout">
          <Checkout />
        </Route>
        <Route exact path="/Admin">
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
