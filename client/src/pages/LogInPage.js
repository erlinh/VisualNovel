import React, { useState, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import firebase from 'firebase/app';
//import firebaseApp from '../firebase/firebase.config';
import { AuthContext } from '../firebase/authContext';
import NavBar from '../components/NavBar/NavBar';
import FooterGrid from '../components/Footer/FooterGrid';

import { Col,Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './LogInPage.css';


export default function LogInPage() {
  const { userID, updateUserID } = useContext(AuthContext);
  //console.log(userID);

  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const [errMsg, setErrMsg] = useState('');
  
  const resetErrMsg = () => {
    setErrMsg('');
  };

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
        setErrMsg('');
        updateUserID(user.user.uid);
        //userinfo(logintoken) stored at local storage
        window.localStorage.setItem('userinfo', JSON.stringify(user.user.uid) );
      // console.log('refresh token', user.user.refreshToken);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

        if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
          setErrMsg('Email or password incorrect.');
        }
      });
  };

  return (
    <>
      {userID ? (
        <Redirect to="/" /> 
      ) : (
        <div className=" container col-lg-12 mt-5 pt-5">
          <NavBar />
          <div style={{minHeight:'80vh'}}>
            <Form  className="auth-form container-fluid">
              <h4 className="text-center">Log In</h4>
              {errMsg ? (
            <div className="error-msg text-danger text-center">
              <p>{errMsg}</p>
            </div>
          ) : (
            null
          )}
              <FormGroup row>
                <Label for="email" sm={2}>Email</Label>
                <Col sm={10}>
                  <Input type="email" name="email" id="email" onChange={handleInputChange} onFocus={resetErrMsg} required={true} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="password" sm={2}>Password</Label>
                <Col sm={10}>
                  <Input type="password" name="password" id="password" onChange={handleInputChange} onFocus={resetErrMsg} required={true} />
                </Col>
              </FormGroup>

              <FormGroup check row>
                <Col className="d-flex justify-content-center">
                  <Button onClick={() => submitAuth(credentials)} >Submit</Button>
                </Col>
              </FormGroup>
              <p className="text-center mt-3" >If you don't have an account yet, <Link to="/register" >register here</Link>.</p>
            </Form>

           
          </div>
          <div className="bg-danger">
            <hr />
          </div>
          
          <FooterGrid/>
    
        </div>
        
      )}
    </>
  );
}
