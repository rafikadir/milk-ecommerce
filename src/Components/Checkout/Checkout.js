import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Checkout.css';
import { userContext } from '../../App';


const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const {productid} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('https://vast-taiga-00970.herokuapp.com/product')
        .then(res=> res.json())
        .then(data => {
            const productList = data;
            const product = productList.find(pd => pd._id === productid);
            setProduct(product);
        });
    },[productid]);

    const handleCheckout = () => {

        const newOrder = {...loggedInUser, ...product};
        fetch('https://vast-taiga-00970.herokuapp.com/order',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
        console.log(newOrder);
    }


    return (
        <Container className="mt-5">
            <Row>
                <Col lg={6}>
                    <h3 className="topTitle">Description</h3>
                    <h4 className="product-info">{product.name}</h4>
                </Col>
                <Col lg={3}>
                    <h3 className="topTitle">Quantity</h3>
                    <h4 className="product-info">1</h4>
                </Col>
                <Col lg={3}>
                    <h3 className="topTitle">Price</h3>
                    <h4 className="product-info">${product.price}</h4>
                </Col>
            </Row>
            <Row className="bottomArea">
                <Col lg={9}>
                    <h1>Total</h1>
                </Col>
                <Col lg={3}>
                    <h4>${product.price}</h4>
                    <Link to="/order">
                        <Button onClick={handleCheckout} className="checkoutBtn">Checkout</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Checkout;