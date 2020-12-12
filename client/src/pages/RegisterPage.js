import React, { useState, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import firebase from 'firebase/app';
//import firebaseApp from '../firebase/firebase.config';
import { AuthContext } from '../firebase/authContext';
import instance from '../axios';
import NavBar from '../components/NavBar/NavBar';
import FooterGrid from '../components/Footer/FooterGrid';

import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './LogInPage.css';


export default function RegisterPage() {
  const { userID, updateUserID } = useContext(AuthContext);
  //console.log(userID);

  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstname: ''
  });

  const [errMsg, setErrMsg] = useState('');

  const resetErrMsg = () => {
    setErrMsg('');
  };

  const handleInputChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const registerNewUser = (newUser) => {
    //console.log('from form inputs', newUser);
    
    if (newUser.password !== newUser.confirmPassword) {
      setErrMsg('Passwords do not match');
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((user) => {
      // New user registered and signed in
        console.log('registered!');
        setErrMsg('');
        const firebaseID = user.user.uid;
        updateUserID(firebaseID);
        // console.log('refresh token', user.user.refreshToken);
        return firebaseID;
      })
      .then(async (firebaseID) => {
        const response = await instance.post('/users/new-user', {
          firebaseID: firebaseID,
          firstname: newUser.firstname,
          email: newUser.email
        });
        // console.log('freshly saved user', response.data);
        return response.data;
      })
      .catch((error) => {
        var errorCode = error.code || 400;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

        if (errorCode === 'auth/weak-password') {
          setErrMsg('Password is too short.');
        } else if (errorCode === 'auth/email-already-in-use') {
          setErrMsg('There is already a user registered with this email address.');
        } else {
          setErrMsg('Something went wrong...');
        }
      });
  };

  return (
    <>
      {userID ? (
        <Redirect to="/" /> 
      ) : (
        
        <div className="container col-lg-12 mt-5 pt-5">
        <NavBar />
          <Form className="auth-form">
          <h4 className="text-center">Register</h4>
          {errMsg ? (
                <div className="error-msg text-center text-danger">
                  <p>{errMsg}</p>
                </div>
              ) : (
                null
              )}
            <FormGroup row>
              <Label for="firstname" sm={2}>First Name</Label>
              <Col sm={10}>
                <Input type="firstname" name="firstname" id="firstname" onChange={handleInputChange} onFocus={resetErrMsg} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="email" sm={2}>Email</Label>
              <Col sm={10}>
                <Input type="email" name="email" id="email" onChange={handleInputChange} onFocus={resetErrMsg} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" sm={2}>Password</Label>
              <Col sm={10}>
                <Input type="password" name="password" id="password" onChange={handleInputChange} onFocus={resetErrMsg} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="confirmPassword" sm={2}>Confirm Password</Label>
              <Col sm={10}>
                <Input type="password" name="confirmPassword" id="confirmPassword" onChange={handleInputChange} onFocus={resetErrMsg} />
              </Col>

            </FormGroup>
            <FormGroup check row>
              <Col className="d-flex justify-content-center">
                <Button onClick={() => registerNewUser(newUser)} >Submit</Button>
              </Col>
            </FormGroup>
            <p className="text-center mt-5" >If you have an account already, <Link to="/login" >log in here</Link>.</p>
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
