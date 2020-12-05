import React, { useState, useContext } from 'react';
import { AuthContext } from './firebase/authContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './firebase/ProtectedRoute';
//import NavBar from './components/NavBar/NavBar';
import DetailsPage from './pages/DetailsPage';
import LandingPage from './pages/LandingPage';
import LogInPage from './pages/LogInPage';
import TextPage from './pages/TextPage';
import SearchPage from './pages/SearchPage';

function App() {
  const [ userID, setUserID ] = useState(null);
  console.log('userID', userID);

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
            <ProtectedRoute path='/stories/:slug/content' component={TextPage} /> 
            <ProtectedRoute path="/stories/:slug" component={DetailsPage} />
            <Route path='/search' component={SearchPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );

}

export default App;
