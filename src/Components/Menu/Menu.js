import React, { useContext } from 'react';
import { Container,Navbar, Nav } from 'react-bootstrap';
import {BrowserRouter as Router, Link} from "react-router-dom";
import { userContext } from '../../App';
import "./Menu.css";

const Menu = () => {
    return (
        <div className="main-menu">
            <Container>
                <Navbar expand="lg" className="menu">
                    <Navbar.Brand>Fresh Milk</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/" className="menuLink">Home</Link>
                        <Link to="/order" className="menuLink">Order</Link>
                        <Link to="/admin" className="menuLink">Admin</Link>
                        <Link to="" className="menuLink">Deals</Link>
                        <Link to="/login" className="loginBtn">Login</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Menu;