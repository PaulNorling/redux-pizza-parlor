import { useState } from 'react';

function Checkout(){
    const [name, setName] = useState('NAME PLACEHOLDER');
    const [streetAddress, setStreeAddress] = useState('555 Applewood Lane');


    return(
        <>
        <h1>Step 3: Checkout</h1>
        <div id="checkout-info">
            <div>
                <div id="user-info">
                    <p id="user-name">{name}</p>
                    <p id="user-street-address">{streetAddress}</p>
                    <p id="user-city-state">Minneapolis, MN</p>
                </div>
                <h2 id="deliver-takeout">For Delivery</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        
        </div>
        </>
    )
}

export default Checkout;