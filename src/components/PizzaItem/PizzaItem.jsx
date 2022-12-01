import { useDispatch } from 'react-redux';

function PizzaItem({ pizza }) {
  const dispatch = useDispatch();
  const dispatchPizza = () => {
    dispatch({ type: 'SET_PIZZAS', payload: pizza.id });
  };

  return (
    <div onClick={dispatchPizza} className="pizza-item">
      <h3>{pizza.name}</h3>
      <p>{pizza.description}</p>
      <h4>Price: {pizza.price}</h4>
      <img src={pizza.image_path}></img>
    </div>
  );
}

export default PizzaItem;
