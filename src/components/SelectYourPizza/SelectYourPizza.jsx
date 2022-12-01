import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem.jsx';

function SelectYourPizza() {
  const reduxStore = useSelector((store) => store.pizzaReducer);
  console.log('Store:', reduxStore);
  const history = useHistory();
  const navigateNext = () => {
    history.push('/CustomerInfo');
  };

  return (
    <div className="select-your-pizza">
      <h1>Step 1: Select Your Pizza</h1>
      {reduxStore.map((pizza) => {
        return <PizzaItem key={pizza.id} pizza={pizza} />;
      })}
      <button onClick={navigateNext}>Next</button>
    </div>
  );
}

export default SelectYourPizza;
