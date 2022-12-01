import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem.jsx';
import './SelectYourPizza.css';

function SelectYourPizza() {
  const reduxStore = useSelector((store) => store.pizzaReducer);
  console.log('Store:', reduxStore);
  const history = useHistory();
  const navigateNext = () => {
    history.push('/CustomerInfo');
  };

  return (
    <div>
      <h1>Step 1: Select Your Pizza</h1>
      <div className="select-your-pizza">
        {reduxStore.map((pizza) => {
          return <PizzaItem key={pizza.id} pizza={pizza} />;
        })}
      </div>
      <button className="btn" onClick={navigateNext}>
        Next
      </button>
    </div>
  );
}

export default SelectYourPizza;
