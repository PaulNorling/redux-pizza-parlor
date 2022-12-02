import './CustomerInfo.css';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function CustomerInfo() {
  const reduxStore = useSelector((store) => store.pizzaOrderReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  console.log('Order in customer', reduxStore);
  let totalPrice = 0;
  for (let pizza of reduxStore) {
    let price = pizza.price;
    totalPrice += Number(price);
  }
  console.log('Price Total:', totalPrice);

  const [newName, setNewName] = useState('');
  const [newStreetAddress, setNewStreetAddress] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newZip, setNewZip] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SET_ORDER',
      payload: { newName, newStreetAddress, newCity, newZip, type },
    });
    history.push('/Checkout');
  };

  return (
    <>
      <div className="neg-margin">
        <p>Total Price: $ {totalPrice}</p>

        <h2>Customer Info:</h2>
        <form onSubmit={handleSubmit} id="customerInputs">
          <input
            className="inputFields"
            type="text"
            value={newName}
            onChange={(event) => {
              setNewName(event.target.value);
            }}
            placeholder="Name"
          />
          <br />
          <input
            className="inputFields"
            type="text"
            value={newStreetAddress}
            onChange={(event) => {
              setNewStreetAddress(event.target.value);
            }}
            placeholder="Street Address"
          />
          <br />
          <input
            className="inputFields"
            type="text"
            value={newCity}
            onChange={(event) => {
              setNewCity(event.target.value);
            }}
            placeholder="City"
          />
          <br />
          <input
            className="inputFields"
            type="number"
            value={newZip}
            onChange={(event) => {
              setNewZip(event.target.value);
            }}
            placeholder="Zip"
          />
          <br />
          <label>
            Delivery
            <input
              type="radio"
              id="delivery"
              name="orderType"
              value="delivery"
              onChange={(event) => {
                setType(event.target.value);
              }}
            />
          </label>
          <br />
          <label>
            Pickup
            <input
              type="radio"
              id="pickup"
              name="orderType"
              value="pickup"
              onChange={(event) => {
                setType(event.target.value);
              }}
            />
          </label>
          <br />
          <button id="customerInfoBtn" type="submit">
            NEXT
          </button>
        </form>
        <br />
      </div>
    </>
  );
}

export default CustomerInfo;
