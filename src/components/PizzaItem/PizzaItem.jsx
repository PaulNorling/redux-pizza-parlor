import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './PizzaItem.css';

function PizzaItem({ pizza }) {
  const dispatch = useDispatch();
  const dispatchPizza = () => {
    setButtonState('REMOVE');
    dispatch({
      type: 'SET_PIZZAS',
      payload: { id: pizza.id, price: pizza.price, name: pizza.name },
    });
  };

  const removePizza = () => {
    console.log('removePizza');
    setButtonState('ADD');
  };
  const [buttonState, setButtonState] = useState('ADD');

  return (
    <div className="pizza-item">
      <h3>{pizza.name}</h3>
      <p>{pizza.description}</p>
      <h4>Price: {pizza.price}</h4>
      <img src={pizza.image_path}></img>
      {buttonState === 'ADD' ? (
        <button onClick={dispatchPizza}>ADD</button>
      ) : (
        <button onClick={removePizza}>REMOVE</button>
      )}
    </div>
  );
}

export default PizzaItem;
