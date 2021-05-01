import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import SingleProduct from '../SingleProduct/SingleProduct';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://vast-taiga-00970.herokuapp.com/product')
        .then(res=>res.json())
        .then(data =>{
            setProducts(data);
        })
    },[])

    return (
        <div>
            <Container className="pt-5">
                <Row>
                    {
                        products.map(product => 
                            <SingleProduct product={product}></SingleProduct>
                        )
                    }
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Products;