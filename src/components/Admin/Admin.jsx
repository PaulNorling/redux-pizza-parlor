import {useSelector} from 'react-redux'
import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function Admin(){

    const dispatch = useDispatch();

    useEffect(() => {
        fetchOrders();
      }, []);

    const fetchOrders = () => {
        axios
          .get('/api/order')
          .then((response) => {
            dispatch({ type: 'SET_ORDER', payload: response.data });
          })
          .catch((error) => {
            alert(error);
          });
      };

    const orderReducer = useSelector(store => store.orderReducer)
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
            {orderReducer.map(order =>
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