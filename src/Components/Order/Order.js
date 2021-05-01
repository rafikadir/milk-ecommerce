import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { userContext } from '../../App';
import './Order.css'

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch('https://vast-taiga-00970.herokuapp.com/order?email='+loggedInUser.email)
        .then (res => res.json())
        .then (data => setOrders(data))
    },[])

    return (
        <Container className="pt-5">
            <h1 className="order-list-head">Hello {loggedInUser.username}, Your Orders: {orders.length}</h1>
            {
                orders.map(order => <li className="orderlist"><span className="orderName">Product Name:</span> {order.name} - <span className="orderName">Price:</span>{order.price} - <span className="orderName">Total:</span> 1</li>)
            }
        </Container>
    );
};

export default Order;