import './Checkout.css';
import { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Checkout(){
    const history = useHistory();


    const userInfo = useSelector(store => store.orderReducer);
    console.log('User info: ', userInfo);
    const pizzaOrder = useSelector(store => store.pizzaOrderReducer);
    console.log('Pizza order: ', pizzaOrder);

    function setData() {
        setName(userInfo.newName);
        setStreetAddress(userInfo.newStreetAddress);
        setCityState(userInfo.newCity);
        setZipCode(userInfo.newZip)
        setDeliverOrTakeout(userInfo.type);
        setOrder(pizzaOrder);
        let newTotal = calcTotal(order);
        setTotal(newTotal);
    }

    const [name, setName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [cityState, setCityState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [type, setDeliverOrTakeout] = useState('')

    const [order, setOrder] = useState([]);

    const [total, setTotal] = useState(0);
        
    const calcTotal = (order) => {
        let total = 0;
        order.map(item =>{
            console.log(item.price);
            total += Number(item.price);
        })
        console.log('Checkout total',total);
        return total;
    }

    const handleCheckout = () => {
        console.log('Checkout Attempt');
        //pass object to database as order
        const sendData = {
            customer_name: name,
            street_address: streetAddress,
            city: cityState,
            zip: zipCode,
            type: type,
            total: calcTotal(order),
            pizzas: order
        }
        axios.post('./api/order', sendData)
        .then(response => {
            console.log('Post successful');
        })
        .catch( error => {
            console.log('Failed to post checkout');
            //alert('Checkout unsuccessful. Please try again.');
        })

    }

    // on page load dom will retrieve info from store and set values.
    useEffect(() => {
        console.log('Inside useEffect, calc total');
        // use selectors to set data in dom
        setData();
        // then calc total
    }, []);



    return(
        <>
            <h1>Step 3: Checkout</h1>
            <div id="checkout-info">
                <div>
                    <div id="user-info">
                        <p id="user-name">{name}</p>
                        <p id="user-street-address">{streetAddress}</p>
                        <p id="user-city-state">{cityState}</p>
                    </div>
                    <h2 id="deliver-takeout">{type}</h2>
                </div>
                <table id='user-order-recipe'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                    </thead>

                    <tbody>
                        {console.log(order)}
                        {order.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <h1>Total: {calcTotal(order)}</h1>
                <button id='customerInfoBtn' onClick={handleCheckout}>Checkout</button>
            </div>
        </>
    )
}

export default Checkout;