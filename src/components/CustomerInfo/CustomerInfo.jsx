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
                type="text"
            //   value={name}
            //   onChange={}
                placeholder="Zip"
            /><br/>
        </form>
        </>
    )
}

export default CustomerInfo;