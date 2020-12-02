import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import initFirebase from './firebase/firebase.config';
import NavBar from './components/NavBar/NavBar';
import DetailsPage from './pages/DetailsPage';
import LandingPage from './pages/LandingPage';
import LogInPage from './pages/LogInPage';
import TextPage from './pages/TextPage';

 
import SearchPage from './pages/SearchPage';

function App() {
  useEffect(() => {
    initFirebase();
  });

  return (
    <BrowserRouter>
      <div className='text-white'>
        {/* <NavBar/> */}
        <Switch>
          <Route exact path='/' component={LandingPage} />          
          <Route path='/login' component={LogInPage} />          
          <Route path='/stories/:slug' component={DetailsPage} />
          <Route path='/search' component={SearchPage} />
          <Route path='/text' component={TextPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );

}

export default App;
