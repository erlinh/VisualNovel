import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
//import firebaseApp from '../firebase/firebase.config';
import { AuthContext } from '../firebase/authContext';
import NavBar from '../components/NavBar/NavBar';
import FooterGrid from '../components/Footer/FooterGrid';

import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './LogInPage.css';


export default function LandingPage() {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    });
  };

  const submitAuth = (credentials) => {
    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
    .then((user) => {
      // Signed in 
      console.log('signed in!');
      console.log('user', user);
      console.log('userID', user.user.uid);
      // console.log('maybe token', user.user.refreshToken);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  };

  return (
      <>
    {user ? (
        <Redirect to="/" /> 
    ) : (
        <div className="container col-lg-10 mt-5 pt-5">
        <NavBar />
        
        <h1>Log In</h1>

        <Form className="auth-form">
        <FormGroup row>
            <Label for="email" sm={2}>Email</Label>
            <Col sm={10}>
            <Input type="email" name="email" id="email" onChange={handleInputChange} />
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="password" sm={2}>Password</Label>
            <Col sm={10}>
            <Input type="password" name="password" id="password" onChange={handleInputChange} />
            </Col>
        </FormGroup>
        <FormGroup check row>
            <Col className="d-flex justify-content-center">
            <Button onClick={() => submitAuth(credentials)} >Submit</Button>
            </Col>
        </FormGroup>
        </Form>

        <div className="bg-danger">
            <hr />
        </div>
        <FooterGrid/>
        </div>
    )}
     </>
  );
}
