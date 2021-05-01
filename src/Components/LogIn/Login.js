import React, { useContext, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    //User info
    const [user, setUser] = useState({
        email: ''
    });

    //Use Context
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    //Google Log in
    const provider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then (res=>{
            // const usermail = res.user.email;
            // setUser(usermail);
            // setLoggedInUser(res.user);
            const {displayName,email,photoURL} = res.user;
            const userInfo = {username: displayName, email:email, photoURL: photoURL};
            setLoggedInUser(userInfo);
            history.replace(from);
        })
        .catch(error =>{
            alert(error.message,"TRY AGAIN!");
        })
    }

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    return (
        <Container className="pt-5">  
            <div className="googleLogIn">
            <h1 className="text-center ">Log In</h1>
                <ul>
                    <li>
                        <Button onClick={googleSignIn} className="socialBtn">
                            Continue with Google
                        </Button>
                    </li>
                </ul>
            </div>
        </Container>
    );
};

export default Login;