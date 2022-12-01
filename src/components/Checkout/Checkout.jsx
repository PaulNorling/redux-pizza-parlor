import { useState } from 'react';
import axios from 'axios';

function Checkout(){
    const [name, setName] = useState('NAME PLACEHOLDER');
    const [streetAddress, setStreetAddress] = useState('555 Applewood Lane (Placeholder)');
    const [cityState, setCityState] = useState('Minneapolis, MN (Placeholder)')

    const [deliverOrTakeout, setDeliverOrTakeout] = useState('For Deliver')

    const [checkoutItemsArray, setCheckoutItemArray] = useState(
        [
            {name:'pep', price: 2.12}, 
            {name:'pep1', price: 3.12},
            {name:'pep2', price: 4.12},
            {name:'pep3', price: 5.12}
        ]
    )

    const handleCheckout = () => {
        console.log('Checkout Attempt');
        //pass object to database as order

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
                <h2 id="deliver-takeout">{deliverOrTakeout}</h2>
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