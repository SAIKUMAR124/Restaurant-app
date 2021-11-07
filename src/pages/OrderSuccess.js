import React from 'react'
import { useGlobalLoginContext } from '../context/LoginContext';

const OrderSuccess = () => {
    const {address} = useGlobalLoginContext();
    const {doorNo, lankMark, village, pinCode} = address;
    
    return (
        <div className='success-con'>
            <h1>Your order is Successfully placed.</h1>
            <h3>Order will be delivered to the Address below..</h3>
             <br/>
             <hr/>
             <h2>{doorNo}</h2>
             <h2>{lankMark}</h2>
             <h2>{village}</h2>
             <h2>{pinCode}</h2>
        </div>
    )
}

export default OrderSuccess
