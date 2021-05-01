import { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './SingleProduct.css';

const SingleProduct = (props) => {
    const product = props.product;
    const {name,image,weight,price,_id} = product;

    return (   
        <Col lg={3} key={_id}>
            <div className="productBox">
                <div className="pdImg">
                    <img src={image} alt="product"/>
                </div>
                <div className="bottomBox">
                    <h4>{name} - {weight} kg</h4>
                    <h1>${price}</h1>
                    <Link to={'/product/'+_id} className="pd-btn">Buy Now</Link>
                </div>
            </div>
        </Col>
    );
};

export default SingleProduct;