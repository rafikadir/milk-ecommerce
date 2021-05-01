import axios from 'axios';
import React, { useState } from 'react';
import { Col, Nav, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            image: imageURL
        }

        const url = `https://vast-taiga-00970.herokuapp.com/addProduct`;
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(response =>{
            console.log("Server Response", response)
        })

        alert("Product Added!");
    };

    const handleImage = (e) => {
        const imageData = new FormData();
        imageData.set('key','36a875d27fe76986995215b3d007796c');
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(res => {
            setImageURL(res.data.data.display_url);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <Container>
            <Row>
                <Col lg={3}>
                    <div>
                        <Nav defaultActiveKey="/home" className="flex-column side-navbar">
                            <Link to="/manage" className="nav-link">Manage Product</Link>
                            <Link to="/addProduct" className="nav-link active">Add Product</Link>
                            <Link to="/" className="nav-link">Edit Product</Link>
                        </Nav>
                    </div>
                </Col>
                <Col lg={9}>
                    <div className="addProduct">
                        <h2>Add Product</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>Enter Name:</label><br/>
                            <input name="name" placeholder="Enter Name" ref={register}/><br/>

                            <label>Enter Weight:</label><br/>
                            <input name="weight" type="number" placeholder="Enter Weight" ref={register}/><br/>
                            
                            <label>Enter Price:</label><br/>
                            <input name="price" type="number" placeholder="Enter Price" ref={register}/><br/>

                            <label>Upload Image:</label><br/>           
                            <input onChange={handleImage} type="file" ref={register}/><br/>           
                            <button type="submit">Save</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AddProduct;