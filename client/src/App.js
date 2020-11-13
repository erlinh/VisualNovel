import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import DetailsPage from './pages/DetailsPage';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';

function App() {

  return (
    <BrowserRouter>
      <div className='text-white'>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/stories/:slug' component={DetailsPage} />
          <Route path='/search' component={SearchPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );

}

export default App;
