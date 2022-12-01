import { useState } from 'react';
import axios from 'axios';

function Checkout(){

    // const setVariable = (newInfo) => {
    //     setName()
    // }

    const [name, setName] = useState('NAME PLACEHOLDER');
    const [streetAddress, setStreetAddress] = useState('555 Applewood Lane Placeholder');
    const [cityState, setCityState] = useState('Minneapolis, MN Placeholder')
    const [zipCode, setZipCode] = useState(55118)

    const [type, setDeliverOrTakeout] = useState('For Deliver')

    const [checkoutItemsArray, setCheckoutItemArray] = useState(
        [
            {name:'pep', price: 2.12, quantity: 1}, 
            {name:'pep1', price: 3.12, quantity: 1},
            {name:'pep2', price: 4.12, quantity: 1},
            {name:'pep3', price: 5.12, quantity: 1}
        ]
    )
    const [total, setTotal] = useState(0);
        
    const calcTotal = (checkoutItemsArray) => {
        let total = 0;
        checkoutItemsArray.map((item, index) => {
            total += item.price;
        })
        setTotal(total);
    }

    const handleCheckout = () => {
        console.log('Checkout Attempt');
        //pass object to database as order
        axios.post('./api/order', {
            customer_name: name,
            street_address: streetAddress,
            city: cityState,
            zip: zipCode,
            type: type,
            total: total,
            pizzas: checkoutItemsArray
        })
        .then(response => {
            console.log('Post successful');
        })
        .catch( error => {
            console.log('Failed to post checkout');
            alert('Checkout unsuccessful. Please try again.');
        })

    }


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
                    {console.log(checkoutItemsArray)}
                    {checkoutItemsArray.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <h1>Total: </h1>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
        </>
    )
}

export default Checkout;