import { Alert } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Nav, Table } from 'react-bootstrap';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './Manage.css'

const Manage = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://vast-taiga-00970.herokuapp.com/product')
        .then(res=>res.json())
        .then(data =>{
            setProducts(data);
        })
    },[])

    const deleteProduct = id => {
        fetch(`https://vast-taiga-00970.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then (result => {
            console.log("delete Success",result);
        })

        alert("Deleted Succesfully!");
    }

    return (
        <Container className="pt-5">
            <Row>
                <Col lg={3}>
                    <div>
                        <Nav defaultActiveKey="/home" className="flex-column side-navbar">
                            <Link to="/manage" className="nav-link active">Manage Product</Link>
                            <Link to="/addProduct" className="nav-link">Add Product</Link>
                            <Link to="/" className="nav-link">Edit Product</Link>
                        </Nav>
                    </div>
                </Col>

                <Col lg={9}>
                    <Table className="table-data">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Weight</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                products.map(product =>
                                    <tr>
                                        <td>{product.name}</td>
                                        <td>{product.weight}</td>
                                        <td>{product.price}</td>
                                        <td><button onClick={()=>deleteProduct(product._id)}class="btn">Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Manage;