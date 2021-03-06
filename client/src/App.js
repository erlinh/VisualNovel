import React, { useState, useEffect } from 'react';
import { AuthContext } from './firebase/authContext';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from './firebase/ProtectedRoute';
//import NavBar from './components/NavBar/NavBar';
import DetailsPage from './pages/DetailsPage';
import LandingPage from './pages/LandingPage';
import LogInPage from './pages/LogInPage';
import RegisterPage from './pages/RegisterPage';
import TextPage from './pages/TextPage';
import SearchPage from './pages/SearchPage';

function App() {
  const [ userID, setUserID ] = useState(null);
  console.log('userID', userID);
  
  useEffect(()=>{
    const user = window.localStorage.getItem('userinfo');
    if(user){
      updateUserID(user);
    }
  },[]);
  const updateUserID = (newUserID) => {
    setUserID(newUserID);
  };

  return (
    <AuthContext.Provider value={{userID, updateUserID}}>
      <BrowserRouter>
        <div className='text-white'>
          {/* <NavBar/> */}
          <Switch>
            <Route exact path='/' component={LandingPage} />          
            <Route path='/login' component={LogInPage} />
            <Route path='/register' component={RegisterPage} />
            <ProtectedRoute path='/stories/:slug/content' component={TextPage} /> 
            <ProtectedRoute path="/stories/:slug" component={DetailsPage} />
            <Route path='/search' component={SearchPage} />
            <Redirect to ='/'/>
          </Switch>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );

}

export default App;
