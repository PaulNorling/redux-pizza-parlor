import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function SelectYourPizza() {
  const reduxStore = useSelector((store) => store.pizzaReducer);
  console.log('Store:', reduxStore);
  const history = useHistory();
  const navigateNext = () => {
    history.push('/CustomerInfo');
  };

  return (
    <>
      <h1>Step 1: Select Your Pizza</h1>
      {reduxStore.map((pizza) => {
        return <div>{/* <PizzaItem key={pizza.id} pizza={pizza}/> */}</div>;
      })}
      <button onClick={navigateNext}>Next</button>
    </>
  );
}

export default SelectYourPizza;
