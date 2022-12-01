import './CustomerInfo.css';

function CustomerInfo(){
    return(
        <>
        <h2>Customer Info</h2>
        <form id='customerInputs'>
            <input
                className='inputFields'
                type="text"
            //   value={name}
            //   onChange={}
                placeholder="Name"
            /><br/>
            <input
                className='inputFields'
                type="text"
            //   value={name}
            //   onChange={}
                placeholder="Street Address"
            /><br/>
            <input
                className='inputFields'
                type="text"
            //   value={name}
            //   onChange={}
                placeholder="City"
            /><br/>
            <input
                className='inputFields'
                type="number"
            //   value={name}
            //   onChange={}
                placeholder="Zip"
            /><br/>
        </form>
        <form>
            <label for="delivery">Delivery
                <input type="radio" id="delivery" name="orderType" value="delivery"/></label><br/>
            <label for="pickup">Pickup
                <input type="radio" id="pickup" name="orderType" value="pickup"/></label>
        </form><br/>
        <button type="submit">NEXT</button>
        </>
    )
}

export default CustomerInfo;