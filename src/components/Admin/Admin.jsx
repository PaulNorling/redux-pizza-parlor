import {useSelector} from 'react-redux'
import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function Admin(){

    //const dispatch = useDispatch();
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetchOrders();
      }, []);

    const fetchOrders = () => {
        axios
          .get('/api/order')
          .then((response) => {
            setOrder(response.data)
            console.log(response.data)
          })
          .catch((error) => {
            alert(error);
          });
      };

    
    return(
        <>
        <table>
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Time Order Placed</th>
                  <th>Type</th>
                  <th>Cost</th>
                </tr>
            </thead>
            <tbody >
            {order.map(order =>
              <tr key={order.id}>
                <td>{order.customer_name}</td>
                <td>{order.time}</td>
                <td>{order.type}</td>
                <td>{order.total}</td>
                </tr>
                )}
            </tbody>  
        </table>
        </>
    )
}

export default Admin;